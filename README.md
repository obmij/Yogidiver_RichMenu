# YogiDiver RichMenu

Apps Script project for the YogiDiver LINE Official Account.

## Features

- LINE Webhook endpoint
- Rich Menu with 6 postback areas
- Flex Message course cards
- Booking carousel
- Google Form booking form
- Google Sheet response destination
- Google Calendar booking event creation
- Form submit trigger
- Rich Menu PNG upload page

## Rich Menu actions

| Area | Postback |
| --- | --- |
| 休閒業餘 | `menu=casual` |
| 專業人士 | `menu=pro` |
| 導覽潛水 | `menu=guided` |
| 預訂行程 | `menu=booking` |
| 行前須知 | `menu=pretrip` |
| 線上體驗 | `menu=online` |

## Required Apps Script Properties

Set these in Apps Script: Project Settings → Script Properties.

| Key | Value |
| --- | --- |
| `LINE_CHANNEL_ACCESS_TOKEN` | LINE Messaging API long-lived channel access token |
| `LINE_CHANNEL_SECRET` | LINE channel secret |

## Setup

Run this function once in Apps Script:

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

Deploy as Web App, open the Web App URL, then upload a PNG sized:

```text
2500 × 1686
```

The upload page calls:

```javascript
installRichMenuFromUpload(bytes);
```

This creates the Rich Menu if needed, uploads the image, and sets it as the default Rich Menu.

## Apps Script entry points

- `doGet()` upload page
- `doPost(e)` LINE webhook
- `setup()` project setup
- `onBookingSubmit(e)` form submit trigger
- `installRichMenuFromUpload(bytes)` Rich Menu image upload
