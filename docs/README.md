# YogiDiverJ Website Prototype

This folder contains a static website prototype for **YogiDiver 優潛人** plus LINE OA rich menu source files.

## Files

- `index.html` — single-page responsive website.
- `line-rich-menu.json` — LINE Messaging API rich menu object with six tappable postback areas for the LINE OA webhook.
- `line-rich-menu-yogidiver.svg` — editable 2500 × 1686 rich menu source artwork. Export to PNG before uploading to LINE.

## LINE OA rich menu behavior

The rich menu is designed for **LINE Official Account**, not as a website navigation menu.

`line-rich-menu.json` uses `postback` actions so that each tap is handled by the LINE webhook / Apps Script bot logic:

| Area | Postback data | Display text |
|---|---|---|
| 休閒業餘 | `menu=casual` | 休閒業餘 |
| 專業人士 | `menu=pro` | 專業人士 |
| 導覽潛水 | `menu=guided` | 導覽潛水 |
| 預訂行程 | `menu=booking` | 預訂行程 |
| 行前須知 | `menu=pretrip` | 行前須知 |
| 線上體驗 | `menu=online` | 線上體驗 |

The public website can still be deployed separately, but the rich menu itself should trigger LINE OA responses unless a specific LIFF or external booking URL is intentionally required.

## Website URL

If GitHub Pages is enabled, the static website will be available at:

```text
https://obmij.github.io/Yogidiver_RichMenu/
```

This URL is for the public website only. It is not required for the rich menu postback flow.

## Website structure

Header requirements implemented:

- Centered YogiDiverJ logo.
- Navigation below logo: 潛水課程、導覽潛水、線上預約、聯絡。
- Language selector on the right: 正體中文、簡體中文、English、日本語。

Main sections implemented:

- 潛水課程
  - 休閒業餘: Open Water Diver, Advanced Open Water Diver, Rescue Diver, Master Scuba Diver.
  - 專業人士: Dive Master, Open Water Scuba Instructor, Master Scuba Diver Trainer.
- 導覽潛水
  - Custom guided dive plan.
  - 2 people minimum.
  - NT$800 per dive / cylinder.
  - Gear rental NT$1,200 / day.
  - Dive computer rental NT$500 / day.
  - Same-day 3 guided cylinders includes free dive computer rental.
- 線上預約
  - Course booking and guided dive booking.
  - Product-sensitive price calculation.
  - Total amount display.
  - Payment handoff buttons for Line Pay, Apple Pay, Google Pay.
- 行前須知
- 線上體驗
- Footer: `YogiDiverJ © 2026`

## Booking prices

| Product | Price |
|---|---:|
| Open Water Diver (eLearning), 3 days / 2 nights | NT$15,000 |
| Advanced Open Water Diver | NT$10,000 |
| Guided dive, per dive / cylinder | NT$800 |
| Skin Dive, up to 2 people | NT$2,000 |
| Full gear rental | NT$1,200 / day |
| Dive computer rental | NT$500 / day |

## Payment and calendar integration

The current page contains the front-end booking and payment handoff flow. Production integration still requires:

1. Google Apps Script Web App endpoint.
2. Google Form or JSON booking receiver.
3. Google Calendar availability and event creation.
4. Line Pay channel credentials.
5. Apple Pay merchant ID, certificate, and domain verification.
6. Google Pay production approval and merchant configuration.

## GitHub Pages deployment

A GitHub Actions workflow has been added at:

```text
.github/workflows/pages.yml
```

In GitHub, confirm this repo setting:

```text
Settings → Pages → Source → GitHub Actions
```

If you prefer classic Pages instead, use:

```text
Branch: main
Folder: /docs
```

## LINE rich menu deployment

1. Export `line-rich-menu-yogidiver.svg` to PNG at 2500 × 1686.
2. Create the rich menu using `line-rich-menu.json`.
3. Upload the PNG as rich menu image.
4. Set the rich menu as the default rich menu for all users.
5. Confirm the LINE webhook / Apps Script project handles the six postback values listed above.
