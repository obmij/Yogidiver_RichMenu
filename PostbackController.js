/**
 * ======================================================
 * Rich Menu Router
 * ======================================================
 */

function PostbackController(event){

    switch(event.postback.data){

        case "menu=casual":

            return Line.replyFlex(

                event.replyToken,

                buildCourseCard(

                    COURSES.casual

                )

            );

        case "menu=pro":

            return Line.replyFlex(

                event.replyToken,

                buildCourseCard(

                    COURSES.professional

                )

            );

        case "menu=guided":

            return Line.replyFlex(

                event.replyToken,

                buildPricingCard(

                    COURSES.guided

                )

            );

        case "menu=booking":

            return replyBooking(

                event.replyToken

            );

        case "menu=pretrip":

            return replyPretrip(

                event.replyToken

            );

        case "menu=online":

            return replyOnline(

                event.replyToken

            );

    }

}