/**
 * Message controller.
 */
const MessageController = {
  handle(event) {
    if (!event.message || event.message.type !== 'text') return;

    return LineService.replyText(
      event.replyToken,
      'YogiDiver 已連線。請使用下方圖文選單查看課程、導覽潛水與預訂行程。'
    );
  }
};
