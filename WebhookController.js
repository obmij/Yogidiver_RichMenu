/**
 * ======================================================
 * Webhook
 * ======================================================
 */

function doPost(e){

    const body=

        JSON.parse(e.postData.contents);

    body.events.forEach(routeEvent);

    return ContentService

        .createTextOutput("OK");

}


function routeEvent(event){

    switch(event.type){

        case "message":

            return MessageController(event);

        case "postback":

            return PostbackController(event);

    }

}


/**
 * 測試用
 */
function MessageController(event){

    Line.replyText(

        event.replyToken,

        "Webhook OK\n\n"+

        event.message.text

    );

}