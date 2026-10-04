// DOM 요소
const inputName1 = document.getElementById("input-name1");
const inputName2 = document.getElementById("input-name2");
const btnCalculate = document.getElementById("btn-calculate");

const pyramidCard = document.getElementById("pyramid-card");
const pyramidBoard = document.getElementById("pyramid-board");

const scoreNum = document.getElementById("score-num");
const resultBadge = document.getElementById("result-badge");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");

const btnShare = document.getElementById("btn-share");
const btnCopy = document.getElementById("btn-copy");
const toastMsg = document.getElementById("toast-msg");

// 폭죽 캔버스
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let confettiParticles = [];
let confettiAnimationId = null;

// 이벤트 리스너
btnCalculate.addEventListener("click", runFriendshipTest);
btnCopy.addEventListener("click", copyCurrentUrl);
btnShare.addEventListener("click", handleShare);

// 엔터 키 입력 시 자동 측정
// 엔터 키 입력 시 자동 측정 및 클릭 시 전체 선택
[inputName1, inputName2].forEach(input => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      runFriendshipTest();
    }
  });
  input.addEventListener("focus", () => {
    input.select();
  });
});

// 우정 지수 측정 실행
function runFriendshipTest() {
  const name1 = inputName1.value.trim();
  const name2 = inputName2.value.trim();

  if (!name1 || !name2) {
    showToast("이름칸에 두 친구의 이름을 모두 입력해주세요! 😊");
    if (!name1) inputName1.focus();
    else if (!name2) inputName2.focus();
    return;
  }

  // 1. 이름 교차 결합 및 피라미드 계산
  const interleaved = interleaveNames(name1, name2);
  const resultData = calculateFriendshipPyramid(interleaved);

  // 2. 보드 초기화 및 카드 표시
  pyramidBoard.innerHTML = "";
  pyramidCard.classList.add("active");

  // 부드러운 스크롤 이동
  pyramidCard.scrollIntoView({ behavior: "smooth", block: "start" });

  // 3. 단계별 순차 렌더링 애니메이션
  renderPyramidAnimated(resultData);
}

// 단계별 순차 렌더링
function renderPyramidAnimated(data) {
  const chars = data.chars;
  const steps = data.steps;
  const finalScore = data.finalScore;

  // 글자 행 생성 (최상단)
  const charRowEl = document.createElement("div");
  charRowEl.className = "pyramid-row";
  chars.forEach(char => {
    const node = document.createElement("div");
    node.className = "char-node";
    node.textContent = char;
    charRowEl.appendChild(node);
  });
  pyramidBoard.appendChild(charRowEl);

  // 숫자 행들 순차적 등장
  let delay = 250;
  steps.forEach((row, rowIndex) => {
    setTimeout(() => {
      const rowEl = document.createElement("div");
      rowEl.className = "pyramid-row";

      const isLastRow = (rowIndex === steps.length - 1);

      row.forEach(num => {
        const node = document.createElement("div");
        node.className = `num-node ${isLastRow ? "highlight" : ""}`;
        node.textContent = num;
        rowEl.appendChild(node);
      });

      pyramidBoard.appendChild(rowEl);

      // 마지막 행까지 다 그려지면 점수 카운트업 및 폭죽
      if (isLastRow) {
        setTimeout(() => {
          finalizeResult(finalScore);
        }, 300);
      }
    }, delay);

    delay += 250;
  });
}

// 최종 점수 확정 및 진단 멘트 업데이트
function finalizeResult(score) {
  const comment = getFriendshipComment(score);

  resultBadge.textContent = comment.badge;
  resultTitle.textContent = comment.title;
  resultDesc.textContent = comment.desc;

  // 점수 숫자 카운트업 애니메이션 (0부터 score까지)
  animateScoreCounter(score);

  // 축하 폭죽 발사
  launchConfetti();
}

// 점수 카운터 애니메이션
function animateScoreCounter(targetScore) {
  let current = 0;
  const duration = 1200; // 1.2초
  const stepTime = Math.max(10, Math.floor(duration / (targetScore || 1)));

  const timer = setInterval(() => {
    current += 1;
    scoreNum.textContent = current;
    if (current >= targetScore) {
      scoreNum.textContent = targetScore;
      clearInterval(timer);
    }
  }, stepTime);
}

// 토스트 메시지
function showToast(msg) {
  toastMsg.textContent = msg;
  toastMsg.classList.add("show");
  setTimeout(() => {
    toastMsg.classList.remove("show");
  }, 2800);
}

// 텍스트 클립보드 복사 함수 (어떤 환경에서도 100% 동작)
function copyTextToClipboard(text, successMsg) {
  // 1차 시도: Clipboard API
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackExecCopy(text, successMsg);
    });
  } else {
    // 2차 시도: Textarea execCommand
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

// 링크 복사 버튼 클릭
function copyCurrentUrl() {
  const shareUrl = window.location.protocol.startsWith("http")
    ? window.location.href
    : "https://eunae7661.github.io/kids-mbti/friendship.html";

  copyTextToClipboard(shareUrl, "🔗 우정 측정기 링크가 복사되었어요! 친구에게 공유해 보세요! 🎉");
}

// 결과 공유하기 버튼 클릭 (카카오톡/SNS 공유용 리치 텍스트)
function handleShare() {
  const name1 = inputName1.value.trim() || "친구1";
  const name2 = inputName2.value.trim() || "친구2";
  const score = scoreNum.textContent;
  const commentTitle = resultTitle.textContent || "영혼의 단짝!";

  const shareUrl = window.location.protocol.startsWith("http")
    ? window.location.href
    : "https://eunae7661.github.io/kids-mbti/friendship.html";

  const fullShareText = `[💖 너와 나의 우정지수 측정 결과]\n` +
                        `🧒 ${name1} ♥ 👧 ${name2}\n` +
                        `우리의 우정 점수는? 👉 ${score}% (${commentTitle})\n\n` +
                        `너도 친구랑 우정지수 측정해 봐! 👇\n${shareUrl}`;

  // 모바일 Web Share 지원 환경인 경우
  if (navigator.share && window.location.protocol.startsWith("http")) {
    navigator.share({
      title: `[우정지수] ${name1} ♥ ${name2} 우리의 찰떡궁합은 ${score}%!`,
      text: fullShareText,
      url: shareUrl
    }).catch(() => {
      // 취소되거나 실패 시 클립보드 복사로 대체
      copyTextToClipboard(fullShareText, "📋 결과와 초대 링크가 복사되었어요! 카톡에 붙여넣기(Ctrl+V) 해보세요! 🎉");
    });
  } else {
    // PC나 로컬 환경에서는 즉시 클립보드에 결과 텍스트 복사!
    copyTextToClipboard(fullShareText, "📋 결과와 초대 링크가 복사되었어요! 카톡에 붙여넣기(Ctrl+V) 해보세요! 🎉");
  }
}

// 축하 폭죽 애니메이션
function launchConfetti() {
  stopConfetti();
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#ff7675", "#74b9ff", "#ffeaa7", "#55efc4", "#a29bfe", "#fd79a8"];
  confettiParticles = [];

  for (let i = 0; i < 80; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 8 + 4,
      d: Math.random() * 80,
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
  setTimeout(stopConfetti, 4000);
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

// 페이지 로드 시 첫 번째 이름 입력칸으로 바로 포커스 이동
window.addEventListener("DOMContentLoaded", () => {
  inputName1.focus();
});
