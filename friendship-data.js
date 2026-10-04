// 한글 초성/중성/종성 획수 데이터 (전통 이름점 표준 획수)
const STROKES = {
  // 초성 (19개)
  initial: {
    'ㄱ': 2, 'ㄲ': 4, 'ㄴ': 2, 'ㄷ': 3, 'ㄸ': 6, 'ㄹ': 5, 'ㅁ': 4,
    'ㅂ': 4, 'ㅃ': 8, 'ㅅ': 2, 'ㅆ': 4, 'ㅇ': 1, 'ㅈ': 3, 'ㅉ': 6,
    'ㅊ': 4, 'ㅋ': 3, 'ㅌ': 4, 'ㅍ': 4, 'ㅎ': 3
  },
  // 중성 (21개)
  medial: {
    'ㅏ': 2, 'ㅐ': 3, 'ㅑ': 3, 'ㅒ': 4, 'ㅓ': 2, 'ㅔ': 3, 'ㅕ': 3,
    'ㅖ': 4, 'ㅗ': 2, 'ㅘ': 4, 'ㅙ': 5, 'ㅚ': 3, 'ㅛ': 3, 'ㅜ': 2,
    'ㅝ': 4, 'ㅞ': 5, 'ㅟ': 3, 'ㅠ': 3, 'ㅡ': 1, 'ㅢ': 2, 'ㅣ': 1
  },
  // 종성 (28개, 0은 받침 없음)
  final: [
    '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ',
    'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ',
    'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
  ],
  finalStrokes: {
    '': 0, 'ㄱ': 2, 'ㄲ': 4, 'ㄳ': 4, 'ㄴ': 2, 'ㄵ': 5, 'ㄶ': 5,
    'ㄷ': 3, 'ㄹ': 5, 'ㄺ': 7, 'ㄻ': 9, 'ㄼ': 9, 'ㄽ': 7, 'ㄾ': 9,
    'ㄿ': 9, 'ㅀ': 8, 'ㅁ': 4, 'ㅂ': 4, 'ㅄ': 6, 'ㅅ': 2, 'ㅆ': 4,
    'ㅇ': 1, 'ㅈ': 3, 'ㅊ': 4, 'ㅋ': 3, 'ㅌ': 4, 'ㅍ': 4, 'ㅎ': 3
  }
};

const INITIAL_LIST = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

const MEDIAL_LIST = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ',
  'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
];

// 한 글자의 총 획수 구하기 (1의 자리만 반환)
function getCharStroke(char) {
  const code = char.charCodeAt(0) - 0xAC00;
  if (code < 0 || code > 11171) {
    // 한글 음절이 아닌 경우 기본값
    return 2;
  }

  const iIdx = Math.floor(code / 588);
  const mIdx = Math.floor((code % 588) / 28);
  const fIdx = code % 28;

  const initChar = INITIAL_LIST[iIdx];
  const medChar = MEDIAL_LIST[mIdx];
  const finChar = STROKES.final[fIdx];

  const total = (STROKES.initial[initChar] || 2) +
                (STROKES.medial[medChar] || 2) +
                (STROKES.finalStrokes[finChar] || 0);

  // 12가 나오면 2로 (1의 자리)
  return total % 10;
}

// 두 이름 교차 결합 (김빛나, 박은애 -> 김 박 빛 은 나 애)
function interleaveNames(name1, name2) {
  const result = [];
  const maxLen = Math.max(name1.length, name2.length);

  for (let i = 0; i < maxLen; i++) {
    if (i < name1.length) result.push(name1[i]);
    if (i < name2.length) result.push(name2[i]);
  }
  return result;
}

// 역피라미드 전체 단계 계산
function calculateFriendshipPyramid(interleavedChars) {
  const steps = [];

  // 1단계: 글자별 획수의 1의 자리
  const firstRow = interleavedChars.map(c => getCharStroke(c));
  steps.push(firstRow);

  // 두 자리 숫자가 남을 때까지 인접한 두 수를 더해 1의 자리로 압축
  let currentRow = firstRow;
  while (currentRow.length > 2) {
    const nextRow = [];
    for (let i = 0; i < currentRow.length - 1; i++) {
      const sum = (currentRow[i] + currentRow[i + 1]) % 10;
      nextRow.push(sum);
    }
    steps.push(nextRow);
    currentRow = nextRow;
  }

  // 최종 점수 (마지막 남은 두 수 결합: 예 [8, 5] -> 85점)
  let finalScore = 0;
  if (currentRow.length === 2) {
    finalScore = currentRow[0] * 10 + currentRow[1];
    // 만약 00이면 100점 특별 보너스 처리!
    if (finalScore === 0) finalScore = 100;
  } else if (currentRow.length === 1) {
    finalScore = currentRow[0] * 10;
  }

  return {
    chars: interleavedChars,
    steps: steps,
    finalScore: finalScore
  };
}

// 점수대별 재미있는 우정 진단 멘트
function getFriendshipComment(score) {
  if (score >= 90) {
    return {
      title: "우주 최강의 영혼의 단짝! 👭✨",
      desc: "전생에 나라를 같이 구했나요? 눈빛만 봐도 마음이 통하고 평생을 함께할 기적의 단짝 친구예요!",
      badge: "💖 환상의 찰떡궁합 100%"
    };
  } else if (score >= 70) {
    return {
      title: "언제나 함께하고 싶은 최고의 베프! 🍕🥰",
      desc: "서로 다른 점도 매력으로 채워주는 든든한 친구! 맛있는 간식을 나눠 먹으며 웃음이 끊이지 않는 사이예요.",
      badge: "🎉 꿀잼 보장 단짝"
    };
  } else if (score >= 50) {
    return {
      title: "투닥투닥 정드는 현실 찐친! 🤼💛",
      desc: "가끔은 티격태격 다투기도 하지만, 막상 없으면 심심해서 하루도 못 버티는 진짜 친구 사이!",
      badge: "✨ 정드는 현실 친구"
    };
  } else {
    return {
      title: "알아갈수록 더 깊어지는 반전 매력 친구! 🌱🤝",
      desc: "지금은 조금 어색할 수 있지만, 함께 시간을 보내면 상상도 못 한 특별한 케미가 폭발할 거예요!",
      badge: "🎈 무한한 성장 가능성"
    };
  }
}
