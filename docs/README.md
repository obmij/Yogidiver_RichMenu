# YogiDiverJ Website Prototype

This folder contains a static website prototype for **YogiDiver 優潛人** plus LINE OA rich menu source files.

## Files

- `index.html` — single-page responsive website.
- `line-rich-menu.json` — LINE Messaging API rich menu object with six tappable areas.
- `line-rich-menu-yogidiver.svg` — editable 2500 × 1686 rich menu source artwork. Export to PNG before uploading to LINE.

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

Use GitHub Pages with source set to:

```text
Branch: main
Folder: /docs
```

After GitHub Pages is enabled, replace `https://YOUR_GITHUB_PAGES_DOMAIN` in `line-rich-menu.json` with the live site URL.

## LINE rich menu deployment

1. Export `line-rich-menu-yogidiver.svg` to PNG at 2500 × 1686.
2. Create the rich menu using `line-rich-menu.json`.
3. Upload the PNG as rich menu image.
4. Set the rich menu as the default rich menu for all users.
