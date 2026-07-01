/**
 * ==========================================================
 * Calendar Service
 * ==========================================================
 */

const CalendarService = {};

CalendarService.create = function () {

  const calendar = CalendarApp.createCalendar(
    CONFIG.CALENDAR_TITLE
  );

  AppProperties.set(
    "CALENDAR_ID",
    calendar.getId()
  );

  return calendar;

};

CalendarService.get = function () {

  const id = AppProperties.get("CALENDAR_ID");

  return CalendarApp.getCalendarById(id);

};