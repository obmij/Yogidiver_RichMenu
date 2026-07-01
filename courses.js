/**
 * ==========================================================
 * Course Data
 * ==========================================================
 */

const COURSES = {

  casual: {

    title: "休閒業餘",

    subtitle: "PADI Recreational Courses",

    image: ASSETS.casual,

    items: [

      "Open Water Diver",

      "Advanced Open Water Diver",

      "Rescue Diver",

      "Master Scuba Diver"

    ],

    button: "我要報名",

    postback: "booking=owd"

  },

  professional: {

    title: "專業人士",

    subtitle: "PADI Professional",

    image: ASSETS.professional,

    items: [

      "Divemaster",

      "Open Water Scuba Instructor",

      "Master Scuba Diver Trainer"

    ],

    button: "我要諮詢",

    postback: "booking=pro"

  },

  guided: {

    title: "導覽潛水",

    subtitle: "2人成團｜客製化潛水",

    image: ASSETS.guided,

    rows: [

      {
        name: "導潛（每氣瓶）",
        price: "NT$800"
      },

      {
        name: "重裝租借",
        price: "NT$1,200 / 天"
      },

      {
        name: "電腦錶",
        price: "NT$500 / 天"
      },

      {
        name: "同日3支氣瓶",
        price: "免費租借電腦錶"
      }

    ],

    button: "立即預約",

    postback: "booking=guided"

  }

};