/**
 * Webhook controller.
 */
const WebhookController = {
  handle(e) {
    try {
      const body = e && e.postData && e.postData.contents
        ? JSON.parse(e.postData.contents)
        : {};

      const events = body.events || [];
      events.forEach(event => this.route(event));
    } catch (error) {
      Logger.log(error.stack || error);
    }

    return ContentService
      .createTextOutput('OK')
      .setMimeType(ContentService.MimeType.TEXT);
  },

  route(event) {
    if (!event || !event.type) return;

    if (event.type === 'message') {
      return MessageController.handle(event);
    }

    if (event.type === 'postback') {
      return PostbackController.handle(event);
    }
  }
};
