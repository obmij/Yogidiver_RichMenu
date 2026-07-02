const RichMenuService = {
  ensure() {
    const existingId = AppProperties.get('RICH_MENU_ID');
    if (existingId) return existingId;
    return this.create();
  },

  create() {
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
      this.area(0, 0, col, row, 'menu=casual', '休閒業餘'),
      this.area(col, 0, col, row, 'menu=pro', '專業人士'),
      this.area(col * 2, 0, w - col * 2, row, 'menu=guided', '導覽潛水'),
      this.area(0, row, col, h - row, 'menu=booking', '預訂行程'),
      this.area(col, row, col, h - row, 'menu=pretrip', '行前須知'),
      this.area(col * 2, row, w - col * 2, h - row, 'menu=online', '線上體驗')
    ];
  },

  area(x, y, width, height, data, displayText) {
    return {
      bounds: { x: x, y: y, width: width, height: height },
      action: {
        type: 'postback',
        data: data,
        displayText: displayText
      }
    };
  },

  uploadImage(bytes, contentType, richMenuId) {
    const id = richMenuId || this.ensure();
    const mimeType = contentType || 'image/jpeg';
    const normalizedBytes = bytes.map(function(value) {
      return value > 127 ? value - 256 : value;
    });

    return LineService.request(
      LineService.DATA_API_BASE + '/richmenu/' + id + '/content',
      'post',
      normalizedBytes,
      mimeType
    );
  },

  setDefault(richMenuId) {
    const id = richMenuId || this.ensure();
    LineService.request(
      LineService.API_BASE + '/user/all/richmenu/' + id,
      'post'
    );
    return id;
  },

  remove(richMenuId) {
    if (!richMenuId) return;
    try {
      LineService.request(
        LineService.API_BASE + '/richmenu/' + richMenuId,
        'delete'
      );
    } catch (error) {
      Logger.log('Unable to delete old Rich Menu: ' + error.message);
    }
  },

  installFromUpload(bytes, contentType) {
    const oldId = AppProperties.get('RICH_MENU_ID');
    AppProperties.remove('RICH_MENU_ID');

    const newId = this.create();
    this.uploadImage(bytes, contentType || 'image/jpeg', newId);
    this.setDefault(newId);

    if (oldId && oldId !== newId) {
      this.remove(oldId);
    }

    return {
      richMenuId: newId,
      previousRichMenuId: oldId || '',
      status: 'installed'
    };
  }
};
