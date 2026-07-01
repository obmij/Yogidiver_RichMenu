function doGet() {
  return HtmlService
    .createHtmlOutputFromFile("upload")
    .setTitle("YogiDiver Rich Menu Upload");
}

function setup() {
  Setup.run();
}