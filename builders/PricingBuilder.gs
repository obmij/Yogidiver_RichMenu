const PricingBuilder = {
  card(data) {
    const contents = [];
    contents.push({ type: 'text', text: data.title, weight: 'bold', size: 'xl', wrap: true });
    contents.push({ type: 'text', text: data.subtitle, size: 'sm', color: '#888888', margin: 'sm', wrap: true });
    contents.push({ type: 'separator', margin: 'lg' });

    data.rows.forEach(row => {
      contents.push({
        type: 'box',
        layout: 'horizontal',
        margin: 'md',
        contents: [
          { type: 'text', text: row.name, flex: 5, size: 'sm', wrap: true },
          { type: 'text', text: row.price, flex: 3, size: 'sm', align: 'end', weight: 'bold', wrap: true }
        ]
      });
    });

    const bubble = {
      type: 'bubble',
      body: { type: 'box', layout: 'vertical', contents },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [{
          type: 'button',
          style: 'primary',
          action: { type: 'postback', label: data.button, data: data.postback }
        }]
      }
    };

    if (data.image) {
      bubble.hero = { type: 'image', url: data.image, size: 'full', aspectRatio: '20:13', aspectMode: 'cover' };
    }

    return bubble;
  }
};
