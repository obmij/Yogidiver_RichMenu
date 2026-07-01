const NotificationService = {
  notifyBooking(namedValues) {
    const course = CalendarService.value(namedValues, 'Course');
    const name = CalendarService.value(namedValues, '中文姓名') || CalendarService.value(namedValues, 'English Name');
    const email = CalendarService.value(namedValues, 'Email');
    const phone = CalendarService.value(namedValues, 'Phone');

    Logger.log('New booking');
    Logger.log('Course: ' + course);
    Logger.log('Name: ' + name);
    Logger.log('Email: ' + email);
    Logger.log('Phone: ' + phone);
  }
};
