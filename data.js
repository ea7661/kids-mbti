// 초등학생 저학년 맞춤 20문항 MBTI 질문 데이터
const QUESTIONS = [
  // --- E vs I (1 ~ 5) ---
  {
    id: 1,
    axis: "EI",
    category: "학교 생활",
    icon: "🔔",
    question: "쉬는 시간 종이 '땡!' 치자마자 나는?",
    options: [
      { text: "복도로 뛰어나가 친구들과 와글와글 신나게 논다!", type: "E", emoji: "🏃💨" },
      { text: "내 자리에 앉아서 좋아하는 책을 읽거나 낙서하며 쉰다!", type: "I", emoji: "🎨📖" }
    ]
  },
  {
    id: 2,
    axis: "EI",
    category: "새 학기",
    icon: "🎒",
    question: "새 학기 첫날, 옆자리에 처음 보는 짝꿍이 앉았을 때!",
    options: [
      { text: "\"안녕! 이름이 뭐야? 우리 친하게 지내자!\" 먼저 말 건다", type: "E", emoji: "👋😄" },
      { text: "두근두근... 짝꿍이 먼저 말을 걸어줄 때까지 조용히 기다린다", type: "I", emoji: "🙈💬" }
    ]
  },
  {
    id: 3,
    axis: "EI",
    category: "생일 파티",
    icon: "🎂",
    question: "내가 꿈꾸는 최고의 생일 파티는?",
    options: [
      { text: "반 친구들 모두 초대해서 왁자지껄 노래 부르고 게임하기!", type: "E", emoji: "🎉🥳" },
      { text: "가장 친한 단짝 친구 1~2명과 방에서 오붓하게 맛있는 거 먹기!", type: "I", emoji: "🧁🎈" }
    ]
  },
  {
    id: 4,
    axis: "EI",
    category: "신나는 주말",
    icon: "☀️",
    question: "주말에 시간 있을 때 더 기분 좋은 순간은?",
    options: [
      { text: "놀이터나 키즈카페에 가서 친구들과 땀 뻘뻘 흘리며 뛰어놀기", type: "E", emoji: "⚽🛝" },
      { text: "폭신한 침대나 소파에서 레고 조립이나 만화책 보기", type: "I", emoji: "🧩🛌" }
    ]
  },
  {
    id: 5,
    axis: "EI",
    category: "수업 시간",
    icon: "🙋",
    question: "선생님이 \"누가 나와서 발표해 볼까?\" 물어보실 때!",
    options: [
      { text: "번쩍 손들고 \"저요! 저요! 제가 해볼래요!\"", type: "E", emoji: "🙋‍♂️✨" },
      { text: "선생님과 눈을 살짝 피하며 마음속으로만 생각한다", type: "I", emoji: "👀🤫" }
    ]
  },

  // --- S vs N (6 ~ 10) ---
  {
    id: 6,
    axis: "SN",
    category: "상상 놀이",
    icon: "☁️",
    question: "하늘에 두둥실 떠 있는 구름을 볼 때 드는 생각은?",
    options: [
      { text: "\"비가 오려나? 달콤한 솜사탕처럼 하얗게 생겼네!\"", type: "S", emoji: "🍭🌧️" },
      { text: "\"저 구름 타고 우주로 날아가면 외계인 친구를 만날 수 있을까?\"", type: "N", emoji: "🚀👽" }
    ]
  },
  {
    id: 7,
    axis: "SN",
    category: "블록 놀이",
    icon: "🧱",
    question: "레고나 블록 장난감을 조립할 때 나는?",
    options: [
      { text: "설명서에 나온 순서대로 똑같이 완벽하게 만든다!", type: "S", emoji: "📋🤖" },
      { text: "설명서는 치우고 내 머릿속에 떠오른 비밀 기지를 만든다!", type: "N", emoji: "🏰✨" }
    ]
  },
  {
    id: 8,
    axis: "SN",
    category: "동물원",
    icon: "🐯",
    question: "동물원에서 커다란 호랑이를 보았을 때!",
    options: [
      { text: "\"우와! 발바닥 털이랑 줄무늬가 진짜 선명하고 멋지다!\"", type: "S", emoji: "🐾🔍" },
      { text: "\"저 호랑이는 무슨 꿈을 꿀까? 나랑 동물 말로 대화하면 좋겠다!\"", type: "N", emoji: "💭🐅" }
    ]
  },
  {
    id: 9,
    axis: "SN",
    category: "재미있는 책",
    icon: "📚",
    question: "도서관에서 책을 고를 때 더 읽고 싶은 책은?",
    options: [
      { text: "공룡 도감이나 신기한 동물 이야기처럼 진짜 있었던 사실 책", type: "S", emoji: "🦕📖" },
      { text: "마법 학교나 마법의 숲 모험처럼 신비롭고 환상적인 판타지 책", type: "N", emoji: "🧙‍♂️🔮" }
    ]
  },
  {
    id: 10,
    axis: "SN",
    category: "초능력",
    icon: "⚡",
    question: "만약 나에게 딱 하나의 초능력이 생긴다면?",
    options: [
      { text: "책을 한 번만 봐도 다 외우는 똑똑한 천재 기억력!", type: "S", emoji: "🧠💯" },
      { text: "하늘을 맘대로 날고 시간 여행을 떠나는 신비한 능력!", type: "N", emoji: "⏳🪄" }
    ]
  },

  // --- T vs F (11 ~ 15) ---
  {
    id: 11,
    axis: "TF",
    category: "친구와 함께",
    icon: "🩹",
    question: "친구가 달리기하다 넘어져 무릎을 다쳤을 때 나의 첫마디는?",
    options: [
      { text: "\"빨리 보건실 가서 빨간약 바르고 밴드 붙이자!\"", type: "T", emoji: "🏥🩹" },
      { text: "\"으앙! 많이 아프지? 안 다쳤어? 괜찮아? (토닥토닥)\"", type: "F", emoji: "🥺❤️" }
    ]
  },
  {
    id: 12,
    axis: "TF",
    category: "피구 경기",
    icon: "🏐",
    question: "체육 시간 반 대항 피구 경기에서 우리 팀이 아깝게 졌을 때!",
    options: [
      { text: "\"다음 판에는 공 던지는 순서를 바꿔서 이길 작전을 짜자!\"", type: "T", emoji: "📐🎯" },
      { text: "\"너무 아쉽다... 그래도 우리 팀 모두 진짜 열심히 잘했어!\"", type: "F", emoji: "👏😭" }
    ]
  },
  {
    id: 13,
    axis: "TF",
    category: "칭찬 받기",
    icon: "🎨",
    question: "내가 열심히 그린 그림을 칭찬받을 때 더 기분 좋은 말은?",
    options: [
      { text: "\"와! 사물 비율을 진짜 잘 맞췄고 색칠을 꼼꼼하게 잘했다!\"", type: "T", emoji: "👍📐" },
      { text: "\"우와~ 그림이 너무 따뜻하고 예뻐! 너 정말 감동이야!\"", type: "F", emoji: "🥰💖" }
    ]
  },
  {
    id: 14,
    axis: "TF",
    category: "간식 나누기",
    icon: "🍪",
    question: "친구와 마지막 남은 초코과자를 나눠 먹을 때!",
    options: [
      { text: "가운데를 자로 잰 듯 정확히 반으로 쪼개서 똑같이 나눈다", type: "T", emoji: "⚖️🍫" },
      { text: "친구가 먹고 싶어 하면 더 큰 조각을 웃으며 양보한다", type: "F", emoji: "🎁😋" }
    ]
  },
  {
    id: 15,
    axis: "TF",
    category: "감동 영화",
    icon: "🎬",
    question: "슬픈 만화 영화나 애니메이션을 볼 때 나의 모습은?",
    options: [
      { text: "\"주인공이 왜 저런 위험한 선택을 했을까? 나라면 저렇게 안 해\"", type: "T", emoji: "🤔💡" },
      { text: "주인공이 너무 불쌍하고 슬퍼서 눈물이 찔끔 난다", type: "F", emoji: "😢💧" }
    ]
  },

  // --- J vs P (16 ~ 20) ---
  {
    id: 16,
    axis: "JP",
    category: "방학 숙제",
    icon: "📝",
    question: "기다리던 방학! 방학 숙제를 할 때 나의 스타일은?",
    options: [
      { text: "방학 첫날부터 하루에 몇 장씩 할지 계획표를 세워 차근차근!", type: "J", emoji: "📅✏️" },
      { text: "매일매일 신나게 놀다가 개학 이틀 전에 번개처럼 몰아서!", type: "P", emoji: "⚡🏃" }
    ]
  },
  {
    id: 17,
    axis: "JP",
    category: "내 책상",
    icon: "🗄️",
    question: "내 방 책상과 서랍 안의 모습은?",
    options: [
      { text: "연필, 지우개, 공책이 칸칸이 반듯하게 제자리에 쏙!", type: "J", emoji: "📐✨" },
      { text: "어디에 뭐가 있는지 나만 알면 돼! 자유분방 스타일", type: "P", emoji: "🎨🌈" }
    ]
  },
  {
    id: 18,
    axis: "JP",
    category: "놀이터 약속",
    icon: "⏰",
    question: "주말에 친구와 놀이터에서 놀기로 약속할 때!",
    options: [
      { text: "\"내일 오후 3시 정각에 미끄럼틀 앞에서 꼭 만나!\"", type: "J", emoji: "🕒🤝" },
      { text: "\"내일 오후에 심심해지면 카톡/전화할게~ 그때 나와!\"", type: "P", emoji: "📱🤙" }
    ]
  },
  {
    id: 19,
    axis: "JP",
    category: "소풍 전날",
    icon: "🎒",
    question: "두근두근 내일은 현장체험학습(소풍) 가는 날!",
    options: [
      { text: "알림장을 보며 가방에 간식과 물티슈를 전날 밤 미리 챙겨둔다", type: "J", emoji: "🎒✔️" },
      { text: "내일 아침에 일어나서 눈에 보이는 간식 쏙쏙 가방에 넣는다", type: "P", emoji: "🍫🥐" }
    ]
  },
  {
    id: 20,
    axis: "JP",
    category: "주말 계획",
    icon: "🎡",
    question: "주말에 놀이공원에 가기로 했는데 갑자기 비가 와서 취소된다면?",
    options: [
      { text: "\"아... 원래 가기로 했는데!\" 계획이 틀어져서 하루 종일 속상하다", type: "J", emoji: "😫🌧️" },
      { text: "\"오히려 좋아! 집에서 만화 보거나 맛있는 치킨 시켜 먹자!\"", type: "P", emoji: "🍗🎮" }
    ]
  }
];

// 16가지 대한민국 대표 인기 여성 스타 MBTI 결과 및 실제 프로필 사진 URL
const RESULTS = {
  "ENFP": {
    name: "츄 (Chuu)",
    emoji: "🍓",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/20251002_Chuu_%EC%B8%84_03.jpg/330px-20251002_Chuu_%EC%B8%84_03.jpg",
    badge: "인간 비타민 & 러블리 요정",
    color: "#ff7675",
    accentBg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    tagline: "\"매일매일이 신나! 내 밝은 에너지를 모두에게 나눠줄래!\"",
    tags: ["#인간비타민", "#깨발랄", "#사랑둥이"],
    desc: "가만히 있어도 주변 사람들의 기분을 환하게 밝혀주는 비타민 같은 스타예요! 호기심이 많고 친화력이 엄청나서 누구와도 3초 만에 친해지는 초절정 사랑둥이랍니다.",
    traits: [
      "밝은 미소와 긍정 에너지로 언제나 교실의 인기 스타예요.",
      "재미있는 놀이나 새로운 장난감을 찾아내는 걸 아주 좋아해요.",
      "친구들의 기분을 기가 막히게 북돋아 주는 마법의 파워가 있어요."
    ],
    bestSubject: "음악 🎵, 댄스/체육 💃",
    bestFriend: "INFJ (태연 🌸)",
    caution: "신나서 시작한 일을 끝까지 차근차근 마무리하는 연습을 조금만 해보세요!"
  },
  "ENFJ": {
    name: "안유진 (IVE)",
    emoji: "🌟",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/IVE_Yujin_2026_GDA.jpg/330px-IVE_Yujin_2026_GDA.jpg",
    badge: "믿음직한 햇살 만능 캡틴",
    color: "#e17055",
    accentBg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    tagline: "\"우리 모두 다 같이 힘내자! 내가 도와줄게, 할 수 있어!\"",
    tags: ["#만능리더", "#햇살미소", "#믿고보는안댕댕"],
    desc: "모둠 활동이나 게임을 할 때 친구들을 상냥하게 이끌어주는 멋진 리더예요! 똑 부러지면서도 친구들을 챙기는 따뜻한 마음씨를 가져서 누구나 믿고 따르고 싶어 해요.",
    traits: [
      "누군가 소외되지 않도록 친구들을 다정하게 챙겨줘요.",
      "자신감 넘치고 시원시원해서 반장이나 모둠장에 딱 어울려요.",
      "어려운 일이 생겨도 포기하지 않고 팀을 든든하게 이끌어요."
    ],
    bestSubject: "학급 회의 📢, 방송/연극 🎬",
    bestFriend: "INFP (아이유 🧚‍♀️)",
    caution: "남들을 챙기느라 내가 지치지 않도록, 내 휴식 시간도 챙겨주세요!"
  },
  "ENTP": {
    name: "이영지",
    emoji: "🎤",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lee_Young-ji_in_February_2026.png/330px-Lee_Young-ji_in_February_2026.png",
    badge: "솔직 당당 텐션 폭발 아이콘",
    color: "#0984e3",
    accentBg: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    tagline: "\"눈치 보지 말고 즐겨! 내 생각은 당당하게 말할 거야!\"",
    tags: ["#텐션대장", "#말솜씨최고", "#유쾌통쾌"],
    desc: "말솜씨가 남다르고 유머 감각이 넘치는 매력적인 스타예요! 톡톡 튀는 아이디어로 지루한 교실을 웃음바다로 만들고, 자기 생각을 당당하게 표현하는 멋진 친구예요.",
    traits: [
      "친구들과 퀴즈 배틀이나 토론을 할 때 재치 만점이에요.",
      "엉뚱하지만 들으면 모두가 감탄하는 기발한 생각을 쏟아내요.",
      "언제나 솔직하고 자신감 넘쳐서 모두에게 큰 웃음을 줘요."
    ],
    bestSubject: "국어 토론 🗣️, 창의 발명 💡",
    bestFriend: "INTJ (김지원 💎)",
    caution: "친구들과 이야기할 때 가끔은 '내 말'보다 '친구 말'을 먼저 들어줘 봐요!"
  },
  "ENTJ": {
    name: "전소연 ((여자)아이들)",
    emoji: "👑",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/%284K%29_%28%EC%97%AC%EC%9E%90%29%EC%95%84%EC%9D%B4%EB%93%A4_%EC%86%8C%EC%97%B0%EC%9D%98_%EB%B0%98%EC%A7%9D%EC%9D%B4%EB%8A%94_%EC%88%9C%EA%B0%84...%EC%A3%BC%EC%96%BC%EB%A6%AC_%EC%97%AC%EC%8B%A0_%EA%B0%95%EB%A6%BC_I_SOYEON_PhotoCall_03_%28cropped%29.png/330px-%284K%29_%28%EC%97%AC%EC%9E%90%29%EC%95%84%EC%9D%B4%EB%93%A4_%EC%86%8C%EC%97%B0%EC%9D%98_%EB%B0%98%EC%A7%9D%EC%9D%B4%EB%8A%94_%EC%88%9C%EA%B0%84...%EC%A3%BC%EC%96%BC%EB%A6%AC_%EC%97%AC%EC%8B%A0_%EA%B0%95%EB%A6%BC_I_SOYEON_PhotoCall_03_%28cropped%29.png",
    badge: "카리스마 천재 프로듀서",
    color: "#d63031",
    accentBg: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
    tagline: "\"목표가 생겼다면 완벽하게! 내가 멋지게 완성해 볼게!\"",
    tags: ["#카리스마", "#목표달성왕", "#천재프로듀서"],
    desc: "자신만의 뚜렷한 목표가 있고 그것을 완벽하게 완성해내는 똑 부러지는 캡틴이에요! 리더십과 기획력이 뛰어나서 어떤 프로젝트든 1등으로 만들어내는 실력파예요.",
    traits: [
      "무엇을 해야 할지 빠르고 정확하게 결정하는 결단력이 있어요.",
      "친구들의 장점을 쏙쏙 뽑아내어 최고의 결과를 만들어내요.",
      "도전하는 것을 두려워하지 않고 스스로 멋진 길을 개척해요."
    ],
    bestSubject: "음악 작곡 🎹, 모둠 프로젝트 🏆",
    bestFriend: "INTP (선미 🔮)",
    caution: "목표를 향해 달릴 때 친구들에게 부드러운 말투로 격려해 주면 더 멋져요!"
  },
  "ESFP": {
    name: "장원영 (IVE)",
    emoji: "🎀",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jang_Won-young_at_the_Bulgari_Eclettica_event_in_Seoul%2C_May_12%2C_2026_%281%29.png/330px-Jang_Won-young_at_the_Bulgari_Eclettica_event_in_Seoul%2C_May_12%2C_2026_%281%29.png",
    badge: "러블리 럭키비키! 모태 아이돌",
    color: "#fd79a8",
    accentBg: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    tagline: "\"완전 럭키비키잖아! 난 언제 어디서나 반짝반짝 빛나!\"",
    tags: ["#럭키비키", "#모태아이돌", "#긍정의여신"],
    desc: "걸어 다니기만 해도 시선 집중! 타고난 사랑스러움과 초긍정 마인드로 무장한 인기 폭발 스타예요. 어떤 힘든 일도 \"오히려 좋아!\"라며 긍정으로 바꾸는 럭키비키의 주인공이랍니다.",
    traits: [
      "친구들의 관심과 사랑을 받을 때 가장 큰 에너지를 얻어요.",
      "예쁜 것, 스타일링, 사진 찍기, 춤추기를 아주 좋아해요.",
      "매사에 밝고 긍정적인 생각으로 주변 친구들을 행복하게 해줘요."
    ],
    bestSubject: "미술/패션 👗, 장기자랑 💃",
    bestFriend: "ISFJ (윤아 🌸)",
    caution: "신나게 놀다 보면 알림장이나 준비물을 깜빡할 수 있으니 미리 챙겨요!"
  },
  "ESFJ": {
    name: "혜리",
    emoji: "💛",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hyeri_in_July_2025.png/330px-Hyeri_in_July_2025.png",
    badge: "모두에게 다정한 배려와 친절의 요정",
    color: "#f39c12",
    accentBg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    tagline: "\"오늘 기분 어때? 내가 맛있는 거 나눠줄게, 힘내!\"",
    tags: ["#친절왕", "#마당발", "#다정한힐링"],
    desc: "반 친구들의 생일을 다 기억하고, 먼저 다가가 간식을 챙겨주는 천사 같은 스타예요! 선생님과 친구들 모두에게 사랑받는 학교 최고의 배려와 친절의 아이콘이에요.",
    traits: [
      "친구들의 작은 표정 변화도 금방 알아채고 따뜻하게 챙겨줘요.",
      "약속을 잘 지키고 선생님의 부탁을 기쁜 마음으로 도와드려요.",
      "사람들과 도란도란 모여 맛있는 걸 먹을 때 가장 행복해해요."
    ],
    bestSubject: "실과/요리 🍪, 바른 생활 🕊️",
    bestFriend: "ISFP (슬기 🐻)",
    caution: "친구들에게 잘해주려다 내 마음이 속상해지지 않도록 나도 아껴주세요!"
  },
  "ESTP": {
    name: "전소미",
    emoji: "🛹",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/20240911_Jeon_Somi_%EC%A0%84%EC%86%8C%EB%AF%B8_02.jpg/330px-20240911_Jeon_Somi_%EC%A0%84%EC%86%8C%EB%AF%B8_02.jpg",
    badge: "행동파 쿨걸 올라운더",
    color: "#e67e22",
    accentBg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    tagline: "\"생각만 하지 말고 일단 뛰어보자! 신나는 게 최고야!\"",
    tags: ["#운동만능", "#용감무쌍", "#액션스타"],
    desc: "운동 신경이 탁월하고 겁이 없어서 새로운 놀이에 씩씩하게 도전하는 쿨걸이에요! 몸으로 부딪히며 배우는 걸 좋아하고 어디서나 당당하고 시원시원한 매력을 뽐내요.",
    traits: [
      "축구, 피구, 달리기 등 체육 시간에 날아다니는 스포츠 만능이에요.",
      "복잡하게 오래 고민하기보다 바로 행동으로 옮겨 해결해요.",
      "솔직하고 털털해서 친구들이 같이 놀고 싶어 하는 인기 만점이에요."
    ],
    bestSubject: "체육 🏃, 현장체험학습 🏕️",
    bestFriend: "ISTJ (아이린 ⭐)",
    caution: "신나게 달리다가 다치지 않게 주변을 한 번씩 살피는 여유를 가져요!"
  },
  "ESTJ": {
    name: "보아 (BoA)",
    emoji: "📋",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/180417_%EB%B3%B4%EC%95%84_03_%28cropped%29_02.png/330px-180417_%EB%B3%B4%EC%95%84_03_%28cropped%29_02.png",
    badge: "정리정돈 1등 철저한 원칙주의자",
    color: "#c0392b",
    accentBg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tagline: "\"약속과 시간은 철저하게! 준비된 사람만이 성공하는 거야!\"",
    tags: ["#원칙주의자", "#정리정돈달인", "#아시아의별"],
    desc: "어릴 때부터 스스로의 시간표를 완벽하게 지키며 성장한 든든한 스타예요! 필통과 책상이 항상 각 잡혀 정리되어 있고, 한 번 정한 규칙은 절대로 어기지 않는 신용왕이에요.",
    traits: [
      "숙제나 과제를 미루지 않고 정해진 순서대로 꼼꼼히 끝내요.",
      "무엇이 공정하고 옳은지 규칙을 기준으로 명확하게 판단해요.",
      "선생님이 계시지 않아도 반의 질서를 지키는 의젓한 모범생이에요."
    ],
    bestSubject: "수학 📐, 사회/도덕 📚",
    bestFriend: "ISFP (슬기 🐻)",
    caution: "규칙을 잘 모르는 친구에게 화내기보다는 친절하게 알려주세요!"
  },
  "INFP": {
    name: "아이유 (IU)",
    emoji: "🧚‍♀️",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/IU_at_Blue_Dragon_Series_Awards_on_18072025_%2810%29.png/330px-IU_at_Blue_Dragon_Series_Awards_on_18072025_%2810%29.png",
    badge: "동화 같은 감성 싱어송라이터",
    color: "#6c5ce7",
    accentBg: "linear-gradient(135deg, #cd9cf2 0%, #f6f3ff 100%)",
    tagline: "\"작은 반딧불이 하나에도 소중한 이야기가 담겨 있어...\"",
    tags: ["#감성요정", "#동화작가", "#따뜻한마음"],
    desc: "마음이 유리구슬처럼 맑고 상상력이 풍부한 최고의 감성 아티스트예요! 조용히 글을 쓰거나 노래를 흥얼거리는 걸 좋아하고, 친구의 아픈 마음에 깊이 공감해 줘요.",
    traits: [
      "혼자서 책을 읽거나 아름다운 상상의 나래를 펼치는 시간을 사랑해요.",
      "상대방의 마음에 상처를 주지 않으려 조심스럽고 다정하게 말해요.",
      "자신만의 특별하고 따뜻한 시선으로 세상을 바라보는 힘이 있어요."
    ],
    bestSubject: "국어(글짓기/동시) ✍️, 미술 🎨",
    bestFriend: "ENFJ (안유진 🌟)",
    caution: "내 소중한 생각을 친구들에게 조금 더 당당하게 표현해 봐도 좋아요!"
  },
  "INFJ": {
    name: "태연 (소녀시대)",
    emoji: "🌸",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/250307_Taeyeon_%40_-The_Tense-_in_Seoul_Day_1_%2854371295597%29_%28cropped%29.jpg/330px-250307_Taeyeon_%40_-The_Tense-_in_Seoul_Day_1_%2854371295597%29_%28cropped%29.jpg",
    badge: "속 깊은 지혜를 품은 보컬 퀸",
    color: "#2d3436",
    accentBg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tagline: "\"친구가 왜 슬픈지 말하지 않아도 난 다 느낄 수 있어.\"",
    tags: ["#속깊은친구", "#지혜로움", "#믿음직한단짝"],
    desc: "또래보다 생각이 깊고 친구들의 감정을 조용히 꿰뚫어 보는 지혜로운 스타예요. 겉으로는 조용하지만 한번 단짝이 된 친구에게는 끝없는 진심과 사랑을 쏟아줘요.",
    traits: [
      "친구가 고민이 있을 때 말없이 곁을 지켜주는 최고의 상담사예요.",
      "차분하게 상황을 관찰하고 다른 사람의 마음을 깊이 배려해요.",
      "혼자 음악을 듣거나 그림을 그릴 때 가장 평온함을 느껴요."
    ],
    bestSubject: "음악 감상 🎧, 독서 📖",
    bestFriend: "ENFP (츄 🍓)",
    caution: "혼자 속으로 고민을 삭이지 말고, 믿을 수 있는 사람에게 털어놓아 봐요!"
  },
  "INTP": {
    name: "선미",
    emoji: "🔮",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/20230720_Lee_Sunmi_on_July_2023_01.jpg/330px-20230720_Lee_Sunmi_on_July_2023_01.jpg",
    badge: "독창적인 4차원 호기심 박사",
    color: "#00b894",
    accentBg: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    tagline: "\"남들이 다 똑같이 할 때, 난 나만의 특별한 길을 찾을래!\"",
    tags: ["#독창적", "#호기심천재", "#4차원매력"],
    desc: "세상의 원리가 궁금하고 남들과 다른 독창적인 세계를 만들어내는 꼬마 과학자 스타예요! 퍼즐이나 만들기, 신기한 미스터리를 탐구할 때 엄청난 집중력을 발휘해요.",
    traits: [
      "\"왜 그럴까?\"라는 호기심이 많아서 책이나 유튜브를 파고들어요.",
      "남들의 유행을 무작정 따르지 않고 나만의 스타일을 중요하게 생각해요.",
      "논리적인 퀴즈나 두뇌 게임을 풀 때 누구보다 똑똑해져요."
    ],
    bestSubject: "과학 실험 🔬, 수학 퍼즐 🧩",
    bestFriend: "ENTJ (전소연 👑)",
    caution: "친구들과 이야기할 때 가끔은 '논리'보다 '마음'을 먼저 살펴주세요!"
  },
  "INTJ": {
    name: "김지원",
    emoji: "💎",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Kim_Ji-won_in_May_2026.png/330px-Kim_Ji-won_in_May_2026.png",
    badge: "스스로 척척 해내는 완벽 전략가",
    color: "#2c3e50",
    accentBg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    tagline: "\"내 계획대로 차근차근 해내면 분명 멋진 결과가 나올 거야.\"",
    tags: ["#스마트전략가", "#스스로척척", "#완벽주의"],
    desc: "누가 시키지 않아도 스스로 계획을 세워 똑 부러지게 해내는 스마트한 스타예요! 조용하지만 강단이 있고, 어떤 어려운 문제 앞에서도 당황하지 않고 차분히 해결해요.",
    traits: [
      "독립적이라 혼자서도 시간 가는 줄 모르고 알차게 하루를 보내요.",
      "목표를 정하면 끝까지 집중해서 완벽하게 결과를 만들어내요.",
      "감정에 휘둘리지 않고 차분하게 생각해서 현명한 판단을 내려요."
    ],
    bestSubject: "컴퓨터 코딩 💻, 수학 📐",
    bestFriend: "ENTP (이영지 🎤)",
    caution: "나와 생각이 다른 친구의 의견도 귀담아들으면 더 멋진 전략이 나와요!"
  },
  "ISFP": {
    name: "슬기 (Red Velvet)",
    emoji: "🐻",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Kang_Seulgi_LONGCHAMP_2024.jpg/330px-Kang_Seulgi_LONGCHAMP_2024.jpg",
    badge: "순수하고 느긋한 감성 곰돌이",
    color: "#00cec9",
    accentBg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    tagline: "\"싸우지 말고 평화롭게~ 그림 그리고 맛있는 거 먹자!\"",
    tags: ["#평화주의자", "#감성천재", "#느긋한곰돌이"],
    desc: "다투는 걸 세상에서 가장 싫어하고 평화로운 분위기를 사랑하는 순수한 스타예요! 그림 그리기와 음악을 좋아하며, 누구에게나 둥글둥글 편안함을 주는 귀염둥이랍니다.",
    traits: [
      "마음씨가 부드러워서 친구들의 부탁을 잘 들어줘요.",
      "미술과 댄스 등 예술적인 감각이 남다르고 손재주가 좋아요.",
      "자신만의 페이스대로 느긋하고 여유롭게 시간을 보내는 걸 좋아해요."
    ],
    bestSubject: "미술 🎨, 댄스 💃",
    bestFriend: "ESFJ (혜리 💛)",
    caution: "해야 할 숙제나 준비물을 미루다가 깜빡하지 않게 미리미리 챙겨요!"
  },
  "ISFJ": {
    name: "윤아 (소녀시대)",
    emoji: "👼",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/260508_YOONA_%40_62nd_BAEKSANG_AWARDS_with_GUCCI.jpg/330px-260508_YOONA_%40_62nd_BAEKSANG_AWARDS_with_GUCCI.jpg",
    badge: "포근하게 챙겨주는 천사표 힐링 요정",
    color: "#fab1a0",
    accentBg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    tagline: "\"내가 옆에서 도와줄게. 필요한 거 있으면 언제든 말해!\"",
    tags: ["#천사표", "#성실보증수표", "#힐링요정"],
    desc: "말없이 친구 옆을 지켜주며 지우개를 빌려주거나 알림장을 챙겨주는 다정한 스타예요! 성실하고 바른 성품으로 누구에게나 편안함과 큰 힘이 되어줘요.",
    traits: [
      "기억력이 좋아서 친구가 좋아하는 간식이나 약속을 잘 기억해요.",
      "맡은 청소 구역이나 심부름을 마지막까지 반짝반짝하게 해내요.",
      "다른 친구가 기뻐하는 모습을 볼 때 가장 큰 보람을 느껴요."
    ],
    bestSubject: "바른 생활 🌸, 국어 📖",
    bestFriend: "ESFP (장원영 🎀)",
    caution: "\"싫어!\"라고 거절해야 할 땐 솔직하게 말해도 괜찮아요!"
  },
  "ISTP": {
    name: "윈터 (aespa)",
    emoji: "❄️",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Winter_at_Incheon_Airport_on_July_10%2C_2026.png/330px-Winter_at_Incheon_Airport_on_July_10%2C_2026.png",
    badge: "쿨하고 시크한 만능 실력파 올라운더",
    color: "#636e72",
    accentBg: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
    tagline: "\"고장 났어? 내가 해볼게. 백 마디 말보다 실력이지!\"",
    tags: ["#만능올라운더", "#시크쿨걸", "#실력파"],
    desc: "말수는 적지만 어떤 일이든 손에 잡히면 척척 해내는 시크한 실력파 스타예요! 무대에서는 카리스마 넘치고 손재주도 좋아서 결정적인 순간에 엄청난 실력을 보여줘요.",
    traits: [
      "손재주가 좋아서 만들기, 악기 연주, 게임 등을 기막히게 잘해요.",
      "주변 눈치를 보지 않고 쿨하고 담백하게 내 할 일을 완벽히 해요.",
      "복잡하게 잔소리 듣는 걸 싫어하고 스스로 직접 해보며 배우는 걸 좋아해요."
    ],
    bestSubject: "실과/만들기 🔨, 체육 🛹",
    bestFriend: "ESTJ (보아 📋)",
    caution: "가끔은 친구들에게 내 따뜻한 속마음을 말로 살짝 표현해 보세요!"
  },
  "ISTJ": {
    name: "아이린 (Red Velvet)",
    emoji: "⭐",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/250320_%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3_Irene_UGG_Photo_Call.jpg/330px-250320_%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3_Irene_UGG_Photo_Call.jpg",
    badge: "약속 100% 신용왕 성실한 반장",
    color: "#2d3436",
    accentBg: "linear-gradient(135deg, #accbee 0%, #e7f0fd 100%)",
    tagline: "\"오늘 할 일은 오늘 끝낸다! 약속은 반드시 지켜야 해!\"",
    tags: ["#약속1등", "#정리정돈달인", "#성실함"],
    desc: "숙제나 준비물을 단 한 번도 빠뜨린 적 없는 철저한 성실왕 스타예요! 깔끔하게 정돈된 책상과 바른 태도로 선생님과 부모님이 가장 믿고 맡기는 신용왕이랍니다.",
    traits: [
      "선생님이 부탁하신 규칙이나 알림장을 빠짐없이 정확하게 챙겨요.",
      "정리정돈이 몸에 배어 있어서 주변이 항상 깨끗해요.",
      "친구들과의 사소한 약속도 소중하게 기억하고 지켜내요."
    ],
    bestSubject: "수학 🔢, 사회/역사 📜",
    bestFriend: "ESTP (전소미 🛹)",
    caution: "예상치 못한 일이 생겨도 너무 당황하지 말고 유연하게 대처해 봐요!"
  }
};
