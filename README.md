# YogiDiverJ｜YogiDiver 優潛人

Static website + LINE OA rich menu + Apps Script webhook project.

## Static website structure

- `index.html` — root homepage for GitHub Pages.
- `pages/` — dedicated HTML pages.
- `assets/css/` — shared stylesheets.
- `assets/js/` — shared JavaScript.
- `assets/img/` — website image assets.
- `line/` — LINE OA rich menu JSON and artwork.
- Apps Script files remain in their existing `controllers/`, `services/`, `builders/`, and `data/` folders.

## GitHub Pages

Use the simplest static Pages setting:

```text
Settings → Pages → Source: Deploy from a branch
Branch: main
Folder: /root
```

No GitHub Actions workflow is required.

Expected Pages URL:

```text
https://obmij.github.io/Yogidiver_RichMenu/
```

## LINE OA Rich Menu actions

The rich menu is for LINE Official Account interaction. It should trigger webhook / Apps Script responses, not navigate to GitHub.

| Area | Postback |
| --- | --- |
| 休閒業餘 | `menu=casual` |
| 專業人士 | `menu=pro` |
| 導覽潛水 | `menu=guided` |
| 預訂行程 | `menu=booking` |
| 行前須知 | `menu=pretrip` |
| 線上體驗 | `menu=online` |

## Required Apps Script Properties

Set these in Apps Script Project Settings → Script Properties.

| Key | Value |
| --- | --- |
| `LINE_CHANNEL_ACCESS_TOKEN` | LINE Messaging API long-lived channel access token |
| `LINE_CHANNEL_SECRET` | LINE channel secret; currently reserved for signature validation if enabled later |

## Apps Script verification

Run this first after pushing to Apps Script:

```javascript
runSelfTest();
```

`runSelfTest()` checks:

- `CONFIG` and LINE token property key.
- Rich menu size and 6 tappable postback areas.
- Rich menu postback values against webhook routes.
- Course, booking, guided diving, pretrip, and online data objects.
- Flex Message payload builders for all rich menu responses.

This is a static payload and structure test. It does not call the LINE API and does not prove the deployed Web App URL, channel token, or LINE account permissions are valid.

## Setup

After `runSelfTest()` passes, run this once in Apps Script:

```javascript
setup();
```

It creates or reuses:

- Google Form
- Google Sheet
- Google Calendar
- Form submit trigger

The IDs are saved in Script Properties:

- `FORM_ID`
- `FORM_URL`
- `SHEET_ID`
- `CALENDAR_ID`

## Rich Menu image upload

Deploy Apps Script as a Web App, open the Web App URL, then upload a PNG/JPG. The upload page resizes it to:

```text
2500 x 1686
```

The upload page calls:

```javascript
installRichMenuFromUpload(bytes, contentType);
```

This creates the Rich Menu if needed, uploads the image, and sets it as the default Rich Menu.

## LINE Webhook

Deploy the Apps Script project as a Web App and paste the Web App URL into LINE Developers as the Messaging API webhook URL.

## Apps Script entry points

- `doGet()` upload page
- `doPost(e)` LINE webhook
- `setup()` project setup
- `runSelfTest()` local structure/payload verification
- `onBookingSubmit(e)` form submit trigger
- `installRichMenuFromUpload(bytes, contentType)` Rich Menu image upload
