const CarouselBuilder = {
  booking(items) {
    return {
      type: 'carousel',
      contents: items.map(item => this.bookingBubble(item))
    };
  },

  bookingBubble(item) {
    const bubble = {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          { type: 'text', text: item.title, weight: 'bold', size: 'lg', wrap: true },
          { type: 'text', text: item.subtitle, size: 'sm', color: '#888888', margin: 'sm', wrap: true },
          { type: 'separator', margin: 'lg' },
          { type: 'text', text: item.price, size: 'lg', weight: 'bold', margin: 'lg', wrap: true }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [{
          type: 'button',
          style: 'primary',
          action: { type: 'postback', label: '我要預約', data: 'booking=' + item.key }
        }]
      }
    };

    if (item.image) {
      bubble.hero = { type: 'image', url: item.image, size: 'full', aspectRatio: '20:13', aspectMode: 'cover' };
    }

    return bubble;
  }
};
