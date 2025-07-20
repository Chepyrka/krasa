import React from 'react';
import './CalendarStyle.css';
import { ScheduleXCalendar, useCalendarApp } from '@schedule-x/react';
import { createViewDay, createViewWeek, createViewMonthGrid, CalendarApp} from '@schedule-x/calendar';
import"@schedule-x/theme-default/dist/calendar.css"
import { createEventModalPlugin } from '@schedule-x/event-modal';
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop';

function Calendar() {

  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid()
    ],
    events: [
      {
        id: 1,
        title: "My first ever event",
        start: "2025-07-20 14:00",
        end: "2025-07-20 15:00",
        description: "This is a test event"
    }
  ],
    selectedDate: "2025-07-20",
    plugins: [
      createEventModalPlugin(),
      createDragAndDropPlugin()
    ]
  });

  return (
    <>
      <h1>Head</h1>
      <div>
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
    </>
    
  );
}

export default Calendar;