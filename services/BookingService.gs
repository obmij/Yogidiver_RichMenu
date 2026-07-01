const BookingService = {
  replyMenu(replyToken) {
    return LineService.replyFlex(
      replyToken,
      CarouselBuilder.booking(BOOKING_COURSES),
      '預訂行程'
    );
  },

  open(replyToken, key) {
    const course = this.findCourse(key);
    const formUrl = AppProperties.get('FORM_URL') || 'https://docs.google.com/forms/';

    const bubble = {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          { type: 'text', text: '確認預約', weight: 'bold', size: 'xl', wrap: true },
          { type: 'text', text: course.title, size: 'md', margin: 'lg', wrap: true },
          { type: 'text', text: course.price, size: 'lg', weight: 'bold', margin: 'md', wrap: true },
          { type: 'text', text: '請開啟報名表，並在 Course 欄位選擇對應課程。', size: 'sm', color: '#666666', margin: 'lg', wrap: true }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [{
          type: 'button',
          style: 'primary',
          action: { type: 'uri', label: '填寫報名表', uri: formUrl }
        }]
      }
    };

    return LineService.replyFlex(replyToken, bubble, '預約 ' + course.title);
  },

  findCourse(key) {
    return BOOKING_COURSES.filter(item => item.key === key)[0] || {
      title: 'Course Booking',
      price: '請洽詢 YogiDiver'
    };
  },

  handleSubmit(e) {
    const values = e && e.namedValues ? e.namedValues : {};
    CalendarService.createBookingEvent(values);
    NotificationService.notifyBooking(values);
  }
};
