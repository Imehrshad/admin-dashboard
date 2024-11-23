import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import moment from "jalali-moment";
import { useSelector } from "react-redux";
import Dialog from "./Dialog";
import "./MyCalendar.css";

const MyCalendar = () => {
  const eventsData = useSelector((state) => state.calendar);
  const [showDialog, setShowDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [eventDetails, setEventDetails] = useState("");

  const customTitle = (date) => {
    return moment(date).locale("fa").format("MMMM YYYY");
  };

  const handleDateClick = () => {
    setShowDialog(true);
  };

  const handleEventClick = (info) => {
    setEditMode(true);
    setShowDialog(true);
    setEventDetails(info.event);
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        editable={false}
        selectable={true}
        events={eventsData.events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        titleFormat={{
          year: "numeric",
          month: "long",
        }}
        dayHeaderContent={(args) => {
          const days = [
            "یکشنبه",
            "دوشنبه",
            "سه‌شنبه",
            "چهارشنبه",
            "پنجشنبه",
            "جمعه",
            "شنبه",
          ];
          return days[args.date.getDay()];
        }}
        locale="fa"
        buttonText={{
          today: "امروز",
          month: "ماه",
          week: "هفته",
          day: "روز",
        }}
        headertitle={customTitle}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
        }}
      />
      <Dialog
        show={showDialog}
        setShow={setShowDialog}
        eventId={eventDetails.id}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </>
  );
};

export default MyCalendar;
