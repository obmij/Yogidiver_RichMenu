/**
 * Apps Script global entry points.
 */
function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('upload')
    .setTitle('YogiDiver Rich Menu Upload');
}

function doPost(e) {
  return WebhookController.handle(e);
}

function setup() {
  return SetupService.run();
}

function getSetupStatus() {
  return SetupStatusService.get();
}

function listAssets() {
  return AssetService.list();
}

function setAsset(key, url) {
  if (!key) return AssetService.list();
  return AssetService.set(key, url);
}

function setAssets(values) {
  if (!values) return AssetService.list();
  return AssetService.setMany(values);
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
