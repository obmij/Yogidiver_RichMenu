const COURSES = {
  casual: {
    title: '休閒業餘',
    subtitle: 'PADI Recreational Courses',
    imageKey: 'casual',
    items: [
      'Open Water Diver',
      'Advanced Open Water Diver',
      'Rescue Diver',
      'Master Scuba Diver'
    ],
    button: '我要報名',
    postback: 'menu=booking'
  },

  professional: {
    title: '專業人士',
    subtitle: 'PADI Professional Courses',
    imageKey: 'professional',
    items: [
      'Divemaster',
      'Open Water Scuba Instructor',
      'Master Scuba Diver Trainer'
    ],
    button: '我要諮詢',
    postback: 'booking=pro'
  },

  guided: {
    title: '導覽潛水',
    subtitle: '2 人開團｜客製化潛水計劃',
    imageKey: 'guided',
    rows: [
      { name: '導潛', price: 'NT$800 / 氣瓶' },
      { name: '重裝租借', price: 'NT$1,200 / 天' },
      { name: '電腦錶租借', price: 'NT$500 / 天' },
      { name: '同日訂購 3 支氣瓶導潛', price: '免費租借電腦錶' }
    ],
    button: '立即預約',
    postback: 'booking=guided'
  }
};

const BOOKING_COURSES = [
  {
    key: 'owd',
    title: 'Open Water Diver',
    subtitle: '3 天 2 夜｜eLearning',
    price: 'NT$15,000',
    imageKey: 'booking'
  },
  {
    key: 'aowd',
    title: 'Advanced Open Water Diver',
    subtitle: '2 天',
    price: 'NT$10,000',
    imageKey: 'booking'
  },
  {
    key: 'guided',
    title: 'Guided Dive',
    subtitle: '2 人開團',
    price: 'NT$800 / 氣瓶',
    imageKey: 'guided'
  },
  {
    key: 'skindive',
    title: 'Skin Dive',
    subtitle: '最多 2 人',
    price: 'NT$2,000',
    imageKey: 'booking'
  }
];

const INFO_PAGES = {
  pretrip: {
    title: '行前須知',
    subtitle: 'Pre-trip Information',
    imageKey: 'pretrip',
    lines: ['行前須知內容建置中。']
  },
  online: {
    title: '線上體驗',
    subtitle: 'Online Experience',
    imageKey: 'online',
    lines: ['線上體驗內容建置中。']
  }
};
