/**
 * ======================================================
 * Booking
 * ======================================================
 */

const Booking={};

Booking.formUrl="";

Booking.open=function(replyToken,course){

    const bubble={

        type:"bubble",

        body:{

            type:"box",

            layout:"vertical",

            contents:[

                {

                    type:"text",

                    text:"確認預約",

                    weight:"bold",

                    size:"xl"

                },

                {

                    type:"text",

                    text:course,

                    wrap:true,

                    margin:"lg"

                }

            ]

        },

        footer:{

            type:"box",

            layout:"vertical",

            contents:[

                {

                    type:"button",

                    style:"primary",

                    action:{

                        type:"uri",

                        label:"填寫報名表",

                        uri:Booking.formUrl

                    }

                }

            ]

        }

    };

    Line.replyFlex(

        replyToken,

        bubble,

        "預約"

    );

};