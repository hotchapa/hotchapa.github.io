module.exports = {
  title: `hotchapa`,
  description: `hotchapa의 기록장`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://hotchapa.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김지훈`,
    bio: {
      role: `개발자`,
      description: ['어제의 나를 이길 줄 아는', '개발이 재미있는', '코드 편의점을 꿈꾸는'],
      thumbnail: 'ping.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/hotchapa`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `hotchapa@naver.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2023.01 ~ 2023.12',
        activity: '삼성 청년 소프트웨어 아카데미 (SSAFY)',
        links: {
        },
      },
      {
        date: '2024.03 ~ ',
        activity: '블로그 시작',
        links: {
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'MUFFIN',
        description:
          '개발 인생 첫 번째 프로젝트로 Open API와 외부 데이터를 활용한 영화 추천 웹 서비스 입니다.',
        techStack: ['vue2', 'django'],
        thumbnailUrl: 'muffinlogo.png',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: 'CRIT',
        description:
          '실시간 화상 챌린지와 소셜 커뮤니티를 결합한 웹 서비스 입니다.',
        techStack: ['React', 'Redux-toolkit'],
        thumbnailUrl: 'critlogo.png',
        links: {
          post: '',
          github: 'https://github.com/hotchapa/CRIT',
          demo: '',
        },
      },
      {
        title: 'GUDGEMENT',
        description:
          '소비내역 기반의 인디언포커를 통한 과소비 줄이기 습관 형성 모바일 서비스 입니다.',
        techStack: ['React Native', 'Tanstack Query', 'Stomp'],
        thumbnailUrl: 'gudgementlogo.png',
        links: {
          post: '',
          github: 'https://github.com/hotchapa/Gudgement',
          demo: '',
        },
      },
      {
        title: 'SENIOR NAVER',
        description:
          '시니어 세대의 쉬운 디지털 적응을 위한 맞춤형 정보제공 웹 서비스 입니다.',
        techStack: ['React', 'Recoil'],
        thumbnailUrl: 'seniornaverlogo.png',
        links: {
          post: '',
          github: 'https://github.com/hotchapa/SeniorNaver',
          demo: '',
        },
      },
    ],
  },
};
