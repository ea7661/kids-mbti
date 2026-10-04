// 상태 관리
let currentQuestionIndex = 0;
let userAnswers = []; // 각 문항별 선택된 타입 저장 ('E', 'I', 'S', 'N', 등)

// DOM 요소 참조
const screenIntro = document.getElementById("screen-intro");
const screenQuiz = document.getElementById("screen-quiz");
const screenLoading = document.getElementById("screen-loading");
const screenResult = document.getElementById("screen-result");

const btnStart = document.getElementById("btn-start");
const btnPrev = document.getElementById("btn-prev");
const quizCategory = document.getElementById("quiz-category");
const quizCounter = document.getElementById("quiz-counter");
const progressBar = document.getElementById("progress-bar");
const questionIcon = document.getElementById("question-icon");
const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".option-btn");

const optEmoji0 = document.getElementById("opt-emoji-0");
const optText0 = document.getElementById("opt-text-0");
const optEmoji1 = document.getElementById("opt-emoji-1");
const optText1 = document.getElementById("opt-text-1");

// 결과 화면 요소
const resultEmoji = document.getElementById("result-emoji");
const resultName = document.getElementById("result-name");
const resultMbti = document.getElementById("result-mbti");
const resultTagline = document.getElementById("result-tagline");
const resultTags = document.getElementById("result-tags");
const resultDesc = document.getElementById("result-desc");
const resultTraits = document.getElementById("result-traits");
const resultSubject = document.getElementById("result-subject");
const resultFriend = document.getElementById("result-friend");
const resultAdvice = document.getElementById("result-advice");

const btnShareKakao = document.getElementById("btn-share-kakao");
const btnCopyLink = document.getElementById("btn-copy-link");
const btnRestart = document.getElementById("btn-restart");
const toastMsg = document.getElementById("toast-msg");

// 폭죽 캔버스
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let confettiParticles = [];
let confettiAnimationId = null;

// 1. 이벤트 리스너 바인딩
btnStart.addEventListener("click", startQuiz);
btnPrev.addEventListener("click", goToPrevQuestion);
btnRestart.addEventListener("click", restartQuiz);
btnCopyLink.addEventListener("click", copyCurrentUrl);
btnShareKakao.addEventListener("click", handleShare);

optionButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const optionIdx = parseInt(btn.getAttribute("data-index"), 10);
    handleOptionSelect(optionIdx);
  });
});

// 화면 전환 헬퍼
function switchScreen(targetScreen) {
  [screenIntro, screenQuiz, screenLoading, screenResult].forEach((s) =>
    s.classList.remove("active")
  );
  targetScreen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 퀴즈 시작
function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [];
  switchScreen(screenQuiz);
  renderQuestion();
}

// 질문 렌더링
function renderQuestion() {
  const currentQ = QUESTIONS[currentQuestionIndex];
  
  // 카테고리 & 인덱스
  quizCategory.textContent = currentQ.category;
  quizCounter.textContent = `${currentQuestionIndex + 1} / ${QUESTIONS.length}`;

  // 프로그레스 바
  const progressPercent = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  // 이전 버튼 가시성
  btnPrev.style.visibility = currentQuestionIndex > 0 ? "visible" : "hidden";

  // 질문 내용
  questionIcon.textContent = currentQ.icon;
  questionText.textContent = currentQ.question;

  // 옵션 내용
  optEmoji0.textContent = currentQ.options[0].emoji;
  optText0.textContent = currentQ.options[0].text;

  optEmoji1.textContent = currentQ.options[1].emoji;
  optText1.textContent = currentQ.options[1].text;
}

// 선택지 클릭 처리
function handleOptionSelect(optionIdx) {
  const currentQ = QUESTIONS[currentQuestionIndex];
  const selectedType = currentQ.options[optionIdx].type;

  userAnswers[currentQuestionIndex] = selectedType;

  if (currentQuestionIndex < QUESTIONS.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    // 마지막 질문 완료 시 로딩 화면 거쳐 결과로 이동
    finishQuiz();
  }
}

// 이전 질문으로 이동
function goToPrevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// 퀴즈 완료 및 결과 계산
function finishQuiz() {
  switchScreen(screenLoading);

  setTimeout(() => {
    const mbtiResult = calculateMBTI();
    showResult(mbtiResult);
  }, 1300);
}

// MBTI 점수 합산 로직
function calculateMBTI() {
  const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  userAnswers.forEach((ans) => {
    if (counts[ans] !== undefined) {
      counts[ans]++;
    }
  });

  const E_or_I = counts.E >= counts.I ? "E" : "I";
  const S_or_N = counts.N > counts.S ? "N" : "S"; // 동점일 경우 기본 경험적 선호
  const T_or_F = counts.F >= counts.T ? "F" : "T";
  const J_or_P = counts.J >= counts.P ? "J" : "P";

  return `${E_or_I}${S_or_N}${T_or_F}${J_or_P}`;
}

// 결과 표시
function showResult(mbtiCode) {
  const result = RESULTS[mbtiCode] || RESULTS["ENFP"];

  resultEmoji.textContent = result.emoji;
  resultName.textContent = result.name;
  resultMbti.textContent = `${mbtiCode} · ${result.badge}`;
  resultTagline.textContent = result.tagline;

  // 해시태그
  resultTags.innerHTML = "";
  result.tags.forEach((tag) => {
    const pill = document.createElement("span");
    pill.className = "result-tag-pill";
    pill.textContent = tag;
    resultTags.appendChild(pill);
  });

  // 상세 설명
  resultDesc.textContent = result.desc;

  // 성격 특징 3가지
  resultTraits.innerHTML = "";
  result.traits.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    resultTraits.appendChild(li);
  });

  // 찰떡 활동 & 단짝 친구
  resultSubject.textContent = result.bestSubject;
  resultFriend.textContent = result.bestFriend;

  // 성장 꿀팁
  resultAdvice.innerHTML = `<strong>💡 나를 위한 성장 꿀팁:</strong> ${result.caution}`;

  switchScreen(screenResult);
  launchConfetti();
}

// 다시 시작하기
function restartQuiz() {
  stopConfetti();
  switchScreen(screenIntro);
}

// 토스트 메시지 띄우기
function showToast(msg) {
  toastMsg.textContent = msg;
  toastMsg.classList.add("show");
  setTimeout(() => {
    toastMsg.classList.remove("show");
  }, 2800);
}

// 텍스트 클립보드 복사 함수
function copyTextToClipboard(text, successMsg) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackExecCopy(text, successMsg);
    });
  } else {
    fallbackExecCopy(text, successMsg);
  }
}

function fallbackExecCopy(text, successMsg) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  textArea.style.top = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    if (successful) {
      showToast(successMsg);
    } else {
      prompt("아래 텍스트를 복사(Ctrl+C)하세요:", text);
    }
  } catch (err) {
    prompt("아래 텍스트를 복사(Ctrl+C)하세요:", text);
  }
  document.body.removeChild(textArea);
}

// 링크 복사하기
function copyCurrentUrl() {
  const shareUrl = window.location.protocol.startsWith("http")
    ? window.location.href
    : "https://eunae7661.github.io/kids-mbti/";

  copyTextToClipboard(shareUrl, "🔗 스타 MBTI 테스트 링크가 복사되었어요! 친구에게 공유해 보세요! 🎉");
}

// 공유하기 기능 (Web Share API 또는 리치 텍스트 클립보드 복사)
function handleShare() {
  const name = resultName.textContent || "인기 스타";
  const mbti = resultMbti.textContent || "";
  const tagline = resultTagline.textContent || "";

  const shareUrl = window.location.protocol.startsWith("http")
    ? window.location.href
    : "https://eunae7661.github.io/kids-mbti/";

  const fullShareText = `[💖 나와 성격이 꼭 닮은 여자 연예인 MBTI 결과]\n` +
                        `나와 닮은 스타는? 👉 ${name} (${mbti})!\n` +
                        `${tagline}\n\n` +
                        `너는 장원영, 아이유, 윈터 중 누구랑 닮았어? 지금 찾아봐! 👇\n${shareUrl}`;

  if (navigator.share && window.location.protocol.startsWith("http")) {
    navigator.share({
      title: "나와 성격이 꼭 닮은 여자 연예인은 누구? 🎀✨",
      text: fullShareText,
      url: shareUrl
    }).catch(() => {
      copyTextToClipboard(fullShareText, "📋 결과와 초대 링크가 복사되었어요! 카톡에 붙여넣기(Ctrl+V) 해보세요! 🎉");
    });
  } else {
    copyTextToClipboard(fullShareText, "📋 결과와 초대 링크가 복사되었어요! 카톡에 붙여넣기(Ctrl+V) 해보세요! 🎉");
  }
}

// 축하 폭죽(Confetti) 이펙트
function launchConfetti() {
  stopConfetti();
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#ff7675", "#74b9ff", "#ffeaa7", "#55efc4", "#a29bfe", "#fd79a8"];
  confettiParticles = [];

  for (let i = 0; i < 90; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 8 + 4,
      d: Math.random() * 90,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngleInc: (Math.random() * 0.07) + 0.05,
      tiltAngle: 0
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiParticles.forEach((p) => {
      p.tiltAngle += p.tiltAngleInc;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 1.5;
      p.tilt = Math.sin(p.tiltAngle - (p.r / 3)) * 15;

      ctx.beginPath();
      ctx.lineWidth = p.r / 1.2;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
      ctx.stroke();

      if (p.y > canvas.height) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
    });

    confettiAnimationId = requestAnimationFrame(draw);
  }

  draw();

  // 4초 후 폭죽 점진적 정지
  setTimeout(stopConfetti, 4500);
}

function stopConfetti() {
  if (confettiAnimationId) {
    cancelAnimationFrame(confettiAnimationId);
    confettiAnimationId = null;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
