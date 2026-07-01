const FlexBuilder = {
  course(data) {
    const contents = [
      { type: 'text', text: data.title, weight: 'bold', size: 'xl', wrap: true },
      { type: 'text', text: data.subtitle, size: 'sm', color: '#888888', margin: 'sm', wrap: true },
      { type: 'separator', margin: 'lg' }
    ];

    data.items.forEach(item => {
      contents.push({ type: 'text', text: '• ' + item, size: 'sm', margin: 'md', wrap: true });
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
  },

  info(data) {
    const contents = [
      { type: 'text', text: data.title, weight: 'bold', size: 'xl', wrap: true },
      { type: 'text', text: data.subtitle, size: 'sm', color: '#888888', margin: 'sm', wrap: true },
      { type: 'separator', margin: 'lg' }
    ];

    data.lines.forEach(line => {
      contents.push({ type: 'text', text: line, size: 'sm', margin: 'md', wrap: true });
    });

    const bubble = { type: 'bubble', body: { type: 'box', layout: 'vertical', contents } };
    if (data.image) {
      bubble.hero = { type: 'image', url: data.image, size: 'full', aspectRatio: '20:13', aspectMode: 'cover' };
    }
    return bubble;
  }
};
