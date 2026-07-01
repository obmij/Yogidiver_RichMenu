const PostbackController = {
  handle(event) {
    const data = event.postback && event.postback.data;

    if (data === 'menu=casual') {
      return LineService.replyFlex(event.replyToken, FlexBuilder.course(COURSES.casual), '休閒業餘');
    }

    if (data === 'menu=pro') {
      return LineService.replyFlex(event.replyToken, FlexBuilder.course(COURSES.professional), '專業人士');
    }

    if (data === 'menu=guided') {
      return LineService.replyFlex(event.replyToken, PricingBuilder.card(COURSES.guided), '導覽潛水');
    }

    if (data === 'menu=booking') {
      return BookingService.replyMenu(event.replyToken);
    }

    if (data === 'menu=pretrip') {
      return LineService.replyFlex(event.replyToken, FlexBuilder.info(INFO_PAGES.pretrip), '行前須知');
    }

    if (data === 'menu=online') {
      return LineService.replyFlex(event.replyToken, FlexBuilder.info(INFO_PAGES.online), '線上體驗');
    }

    if (data && data.indexOf('booking=') === 0) {
      return BookingService.open(event.replyToken, data.replace('booking=', ''));
    }

    return LineService.replyText(event.replyToken, '目前無法處理這個選項，請重新點選選單。');
  }
};
