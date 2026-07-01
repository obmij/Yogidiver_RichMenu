/**
 * ======================================================
 * LINE Service
 * ======================================================
 */

const Line = {

  API: "https://api.line.me/v2/bot",

  DATA_API: "https://api-data.line.me/v2/bot"

};

/**
 * 共用 Request
 */
Line.request = function(url, method, payload, contentType){

  const options={

    method:method,

    headers:{
      Authorization:
      "Bearer "+CONFIG.CHANNEL_ACCESS_TOKEN
    },

    muteHttpExceptions:true

  };

  if(payload!==undefined){

      options.payload=payload;

  }

  if(contentType){

      options.contentType=contentType;

  }

  const response=
      UrlFetchApp.fetch(url,options);

  Logger.log(response.getResponseCode());

  Logger.log(response.getContentText());

  return response;

};


/**
 * Reply
 */
Line.reply=function(replyToken,messages){

    if(!Array.isArray(messages)){

        messages=[messages];

    }

    return Line.request(

        Line.API+"/message/reply",

        "post",

        JSON.stringify({

            replyToken:replyToken,

            messages:messages

        }),

        "application/json"

    );

};


/**
 * Reply Text
 */
Line.replyText=function(replyToken,text){

    return Line.reply(replyToken,{

        type:"text",

        text:text

    });

};


/**
 * Reply Flex
 */
Line.replyFlex=function(replyToken,flex,altText){

    return Line.reply(replyToken,{

        type:"flex",

        altText:altText||CONFIG.OA_NAME,

        contents:flex

    });

};


/**
 * Push Text
 */
Line.pushText=function(userId,text){

    return Line.request(

        Line.API+"/message/push",

        "post",

        JSON.stringify({

            to:userId,

            messages:[

                {

                    type:"text",

                    text:text

                }

            ]

        }),

        "application/json"

    );

};


/**
 * Profile
 */
Line.getProfile=function(userId){

    const response=

        Line.request(

            Line.API+"/profile/"+userId,

            "get"

        );

    return JSON.parse(response.getContentText());

};