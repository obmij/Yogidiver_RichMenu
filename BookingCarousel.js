/**
 * ======================================================
 * Booking Carousel
 * ======================================================
 */

function replyBooking(replyToken){

  const bubbles=[

    buildBookingBubble({

      title:"Open Water Diver",

      subtitle:"3天2夜｜eLearning",

      image:ASSETS.booking,

      price:"NT$15,000",

      postback:"booking=owd"

    }),

    buildBookingBubble({

      title:"Advanced Open Water",

      subtitle:"2天",

      image:ASSETS.booking,

      price:"NT$10,000",

      postback:"booking=aowd"

    }),

    buildBookingBubble({

      title:"Guided Dive",

      subtitle:"2人成團",

      image:ASSETS.guided,

      price:"NT$800 / 氣瓶",

      postback:"booking=guided"

    }),

    buildBookingBubble({

      title:"Skin Dive",

      subtitle:"最多2人",

      image:ASSETS.booking,

      price:"NT$2,000",

      postback:"booking=skindive"

    })

  ];

  Line.replyFlex(

      replyToken,

      {

          type:"carousel",

          contents:bubbles

      },

      "預訂行程"

  );

}