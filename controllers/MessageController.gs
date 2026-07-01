/**
 * Message controller.
 */
const MessageController = {
  handle(event) {
    if (!event.message || event.message.type !== 'text') return;

    return LineService.replyText(
      event.replyToken,
      'Webhook OK\n\n' + event.message.text
    );
  }
};
