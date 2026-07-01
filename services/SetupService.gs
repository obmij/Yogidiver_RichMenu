const SetupService = {
  run() {
    const form = FormService.ensure();
    const sheet = SheetService.ensure(form);
    const calendar = CalendarService.ensure();
    const triggerStatus = TriggerService.ensure(sheet);

    Logger.log('YogiDiver setup complete');
    Logger.log('Form URL: ' + FormService.getUrl());
    Logger.log('Sheet ID: ' + sheet.getId());
    Logger.log('Calendar ID: ' + calendar.getId());
    Logger.log('Trigger: ' + triggerStatus);

    return {
      formUrl: FormService.getUrl(),
      sheetId: sheet.getId(),
      calendarId: calendar.getId(),
      trigger: triggerStatus
    };
  }
};
