/**
 * LINE Messaging API helper.
 */
const LineService = {
  API_BASE: 'https://api.line.me/v2/bot',
  DATA_API_BASE: 'https://api-data.line.me/v2/bot',

  token() {
    const keyOrToken = CONFIG.LINE_CHANNEL_ACCESS_TOKEN_KEY;
    const value = keyOrToken ? AppProperties.get(keyOrToken) : '';
    if (value) return value;

    if (this.looksLikeToken(keyOrToken)) {
      return keyOrToken;
    }

    throw new Error('Missing Script Property: LINE_CHANNEL_ACCESS_TOKEN');
  },

  looksLikeToken(value) {
    return typeof value === 'string' && value.length > 80 && value !== 'LINE_CHANNEL_ACCESS_TOKEN';
  },

  request(url, method, payload, contentType) {
    const options = {
      method,
      headers: {
        Authorization: 'Bearer ' + this.token()
      },
      muteHttpExceptions: true
    };

    if (payload !== undefined && payload !== null) {
      options.payload = payload;
    }
    if (contentType) {
      options.contentType = contentType;
    }

    const response = UrlFetchApp.fetch(url, options);
    const code = response.getResponseCode();
    const text = response.getContentText();
    Logger.log(code);
    Logger.log(text);

    if (code >= 400) {
      throw new Error('LINE API error ' + code + ': ' + text);
    }

    return response;
  },

  reply(replyToken, messages) {
    const list = Array.isArray(messages) ? messages : [messages];
    return this.request(
      this.API_BASE + '/message/reply',
      'post',
      JSON.stringify({ replyToken, messages: list }),
      'application/json'
    );
  },

  replyText(replyToken, text) {
    return this.reply(replyToken, { type: 'text', text });
  },

  replyFlex(replyToken, contents, altText) {
    return this.reply(replyToken, {
      type: 'flex',
      altText: altText || CONFIG.OA_NAME,
      contents
    });
  },

  pushText(userId, text) {
    return this.request(
      this.API_BASE + '/message/push',
      'post',
      JSON.stringify({
        to: userId,
        messages: [{ type: 'text', text }]
      }),
      'application/json'
    );
  }
};
