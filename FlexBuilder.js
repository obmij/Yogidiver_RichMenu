/**
 * ==========================================================
 * Course Bubble Builder
 * ==========================================================
 */

function buildCourseCard(data) {

  const contents = [

    {
      type: "text",
      text: data.title,
      weight: "bold",
      size: "xl"
    },

    {
      type: "text",
      text: data.subtitle,
      size: "sm",
      color: "#888888",
      margin: "sm"
    },

    {
      type: "separator",
      margin: "lg"
    }

  ];

  data.items.forEach(function (item) {

    contents.push({

      type: "text",

      text: "• " + item,

      wrap: true,

      size: "sm",

      margin: "md"

    });

  });

  return {

    type: "bubble",

    hero: {

      type: "image",

      url: data.image,

      size: "full",

      aspectRatio: "20:13",

      aspectMode: "cover"

    },

    body: {

      type: "box",

      layout: "vertical",

      contents: contents

    },

    footer: {

      type: "box",

      layout: "vertical",

      contents: [

        {

          type: "button",

          style: "primary",

          action: {

            type: "postback",

            label: data.button,

            data: data.postback

          }

        }

      ]

    }

  };

}