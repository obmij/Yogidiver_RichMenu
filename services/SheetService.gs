const SheetService = {
  ensure(form) {
    const existingId = AppProperties.get('SHEET_ID');
    if (existingId) {
      try {
        return SpreadsheetApp.openById(existingId);
      } catch (error) {
        AppProperties.remove('SHEET_ID');
      }
    }

    const spreadsheet = SpreadsheetApp.create(CONFIG.SHEET_TITLE);
    form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());
    AppProperties.set('SHEET_ID', spreadsheet.getId());
    return spreadsheet;
  }
};
