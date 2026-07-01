const RichMenuService = {
  ensure() {
    const existingId = AppProperties.get('RICH_MENU_ID');
    if (existingId) return existingId;

    const payload = {
      size: {
        width: CONFIG.RICH_MENU_WIDTH,
        height: CONFIG.RICH_MENU_HEIGHT
      },
      selected: true,
      name: CONFIG.RICH_MENU_NAME,
      chatBarText: CONFIG.RICH_MENU_CHAT_BAR_TEXT,
      areas: this.areas()
    };

    const response = LineService.request(
      LineService.API_BASE + '/richmenu',
      'post',
      JSON.stringify(payload),
      'application/json'
    );

    const result = JSON.parse(response.getContentText());
    AppProperties.set('RICH_MENU_ID', result.richMenuId);
    return result.richMenuId;
  },

  areas() {
    const w = CONFIG.RICH_MENU_WIDTH;
    const h = CONFIG.RICH_MENU_HEIGHT;
    const col = Math.floor(w / 3);
    const row = Math.floor(h / 2);

    return [
      this.area(0, 0, col, row, 'menu=casual'),
      this.area(col, 0, col, row, 'menu=pro'),
      this.area(col * 2, 0, w - col * 2, row, 'menu=guided'),
      this.area(0, row, col, h - row, 'menu=booking'),
      this.area(col, row, col, h - row, 'menu=pretrip'),
      this.area(col * 2, row, w - col * 2, h - row, 'menu=online')
    ];
  },

  area(x, y, width, height, data) {
    return {
      bounds: { x, y, width, height },
      action: {
        type: 'postback',
        data
      }
    };
  },

  uploadImage(bytes) {
    const richMenuId = this.ensure();
    const normalizedBytes = bytes.map(value => value > 127 ? value - 256 : value);

    return LineService.request(
      LineService.DATA_API_BASE + '/richmenu/' + richMenuId + '/content',
      'post',
      normalizedBytes,
      'image/png'
    );
  },

  setDefault() {
    const richMenuId = this.ensure();
    LineService.request(
      LineService.API_BASE + '/user/all/richmenu/' + richMenuId,
      'post'
    );
    return richMenuId;
  },

  installFromUpload(bytes) {
    const richMenuId = this.ensure();
    this.uploadImage(bytes);
    this.setDefault();
    return {
      richMenuId,
      status: 'installed'
    };
  }
};
