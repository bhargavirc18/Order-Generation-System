import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  
  const slotDuration = "08:00:00"; // Duration of each slot (8 hours)
  
  const handleDateClick = (info) => {
    // Switch to the day grid view when a date is clicked
    if (info.date) {
      const clickedDate = info.dateStr;
      
      // Switch FullCalendar view to 'timeGridDay' for the clicked date
      info.view.calendar.gotoDate(clickedDate);
      info.view.calendar.changeView('timeGridDay');
    }
  };
  const generateEvents = () => {
    
    const currentDate = new Date(); // Get the current date
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month index starts from 0

    const events = [];

    // Loop through each day of the month to create events
    for (let day = 1; day <= 31; day++) {
      // Construct the date string in YYYY-MM-DD format
      const date = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

      events.push(
        {
          title: "Shift 1",
          start: `${date}T00:00:00`, // Shift 1 starts at 08:00 AM
          end: `${date}T08:00:00`, // Shift 1 ends at 12:00 PM
        },
        {
          title: "Shift 2",
          start: `${date}T08:00:00`, // Shift 2 starts at 12:00 PM
          end: `${date}T16:00:00`, // Shift 2 ends at 04:00 PM
        },
        {
          title: "Shift 3",
          start: `${date}T16:00:00`, // Shift 3 starts at 04:00 PM
          end: `${date}T24:00:00`, // Shift 3 ends at 08:00 PM
        },
      );
    }

    return events;
  };
  

  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        dateClick={handleDateClick}
        slotMinTime = "00:00:00"
        slotMaxTime = "24:00:00"
        slotLabelFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
        eventBackgroundColor="#3788d8" // Customize event colors if needed
        events={generateEvents()}
      />
    </div>
  );
}
export default Calendar;


