const TriggerService = {
  ensure(spreadsheet) {
    const triggers = ScriptApp.getProjectTriggers();
    const exists = triggers.some(trigger => trigger.getHandlerFunction() === 'onBookingSubmit');
    if (exists) return 'existing';

    ScriptApp.newTrigger('onBookingSubmit')
      .forSpreadsheet(spreadsheet)
      .onFormSubmit()
      .create();

    return 'created';
  }
};
