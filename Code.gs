/**
 * Apps Script global entry points.
 */
function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('views/upload')
    .setTitle('YogiDiver Rich Menu Upload');
}

function doPost(e) {
  return WebhookController.handle(e);
}

function setup() {
  return SetupService.run();
}

function validateProject() {
  return ValidationService.run();
}

function onBookingSubmit(e) {
  return BookingService.handleSubmit(e);
}

function installRichMenuFromUpload(bytes) {
  return RichMenuService.installFromUpload(bytes);
}

function createRichMenuOnly() {
  return RichMenuService.ensure();
}

function setDefaultRichMenu() {
  return RichMenuService.setDefault();
}
