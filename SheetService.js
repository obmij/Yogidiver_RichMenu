/**
 * ======================================================
 * Sheet
 * ======================================================
 */

const SheetService={};

SheetService.create=function(form){

    const ss=

        SpreadsheetApp.create(

            CONFIG.SHEET_TITLE

        );

    form.setDestination(

        FormApp.DestinationType.SPREADSHEET,

        ss.getId()

    );

    return ss;

};

AppProperties.set(
  "SHEET_ID",
  ss.getId()
);