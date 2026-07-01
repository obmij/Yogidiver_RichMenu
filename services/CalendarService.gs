const CalendarService = {
  ensure() {
    const existingId = AppProperties.get('CALENDAR_ID');
    if (existingId) {
      const existing = CalendarApp.getCalendarById(existingId);
      if (existing) return existing;
      AppProperties.remove('CALENDAR_ID');
    }

    const calendar = CalendarApp.createCalendar(CONFIG.CALENDAR_TITLE);
    AppProperties.set('CALENDAR_ID', calendar.getId());
    return calendar;
  },

  createBookingEvent(namedValues) {
    const calendar = this.ensure();
    const course = this.value(namedValues, 'Course') || 'YogiDiver Booking';
    const name = this.value(namedValues, '中文姓名') || this.value(namedValues, 'English Name') || 'Guest';
    const phone = this.value(namedValues, 'Phone');
    const email = this.value(namedValues, 'Email');
    const notes = this.value(namedValues, 'Medical Conditions / Notes');
    const preferredDate = this.value(namedValues, 'Preferred Date');

    const start = preferredDate ? new Date(preferredDate) : new Date();
    if (isNaN(start.getTime())) return null;

    start.setHours(9, 0, 0, 0);
    const end = new Date(start.getTime());
    end.setHours(10, 0, 0, 0);

    const description = [
      'Course: ' + course,
      'Name: ' + name,
      'Phone: ' + phone,
      'Email: ' + email,
      'Notes: ' + notes
    ].join('\n');

    return calendar.createEvent('YogiDiver Booking｜' + course + '｜' + name, start, end, {
      description: description
    });
  },

  value(namedValues, key) {
    const value = namedValues && namedValues[key];
    if (Array.isArray(value)) return value[0] || '';
    return value || '';
  }
};
