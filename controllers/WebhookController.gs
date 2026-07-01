/**
 * Webhook controller.
 */
const WebhookController = {
  handle(e) {
    try {
      const body = JSON.parse(e.postData.contents || '{}');
      const events = body.events || [];
      events.forEach(event => this.route(event));
    } catch (error) {
      Logger.log(error.stack || error);
    }

    return ContentService.createTextOutput('OK');
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
