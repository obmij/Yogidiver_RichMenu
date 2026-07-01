/**
 * ==========================================================
 * One Click Setup
 * ==========================================================
 */

const Setup = {};

Setup.run = function () {

  Logger.log("==========");

  Logger.log("YogiDiver Setup");

  Logger.log("==========");

  const form =
      FormService.create();

  const sheet =
      SheetService.create(form);

  CalendarService.create();

  Logger.log("Form");

  Logger.log(
      AppProperties.get("FORM_URL")
  );

  Logger.log("Sheet");

  Logger.log(
      AppProperties.get("SHEET_ID")
  );

  Logger.log("Calendar");

  Logger.log(
      AppProperties.get("CALENDAR_ID")
  );

  Logger.log("Setup Complete");

};