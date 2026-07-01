/**
 * ==========================================================
 * Pricing Bubble Builder
 * ==========================================================
 */

function buildPricingCard(data) {

  const body = [

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

  data.rows.forEach(function (row) {

    body.push({

      type: "box",

      layout: "baseline",

      margin: "md",

      contents: [

        {

          type: "text",

          text: row.name,

          flex: 5,

          wrap: true

        },

        {

          type: "text",

          text: row.price,

          flex: 2,

          align: "end",

          weight: "bold"

        }

      ]

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

      contents: body

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