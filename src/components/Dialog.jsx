import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import {
  addCloneEvent,
  addEvent,
  editClone,
  editEvent,
  removeCloneEvent,
  removeEvent,
} from "../redux/features/calendar/calenderSlice";
import { useDispatch, useSelector } from "react-redux";

const Dialog = ({ show, setShow, eventId, editMode, setEditMode }) => {
  const dialogRef = useRef();
  const startTime = useRef();
  const endTime = useRef();
  const titleRef = useRef();
  const dispatch = useDispatch();
  const [dateValue, setDateValue] = useState("");
  const event = useSelector((state) =>
    state.calendar.cloneEvents.find((e) => e.id === eventId)
  );

  useEffect(() => {
    if (show === true) {
      dialogRef.current.showModal();
    }
  }, [show]);

  useEffect(() => {
    if (!editMode) {
      startTime.current.value = "";
      endTime.current.value = "";
      titleRef.current.value = "";
      setDateValue("");
    } else {
      startTime.current.value = event.startTime;
      endTime.current.value = event.endTime;
      titleRef.current.value = event.title;
      setDateValue(event.date);
    }
  }, [editMode]);

  const closeDialog = () => {
    dialogRef.current.close();
    setShow(false);
    setEditMode(false);
  };

  const restForm = () => {
    startTime.current.value = "";
    endTime.current.value = "";
    titleRef.current.value = "";
    dialogRef.current.close();
    setDateValue("")
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const id = new Date().toISOString();
    const startTimeValue = startTime.current.value;
    const endTimeValue = endTime.current.value;

    dispatch(
      addCloneEvent({
        id: id,
        title: titleRef.current.value,
        date: dateValue,
        startTime: startTimeValue,
        endTime: endTimeValue,
      })
    );
    const gregorianStartDate = new DateObject({
      date: dateValue[0],
      calendar: persian,
    })
      .convert(gregorian)
      .format("YYYY-MM-DD");

    const gregorianEndDate = new DateObject({
      date: dateValue[1],
      calendar: persian,
    })
      .convert(gregorian)
      .format("YYYY-MM-DD");

    const toEnglishDigits = (str) =>
      str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
    const normalizedStartDate = toEnglishDigits(gregorianStartDate);
    const normalizedEndDate = toEnglishDigits(gregorianEndDate);

    const startDateTime = `${normalizedStartDate}T${startTimeValue}:00`;
    const endDateTime = `${normalizedEndDate}T${endTimeValue}:00`;

    dispatch(
      addEvent({
        id: id,
        title: titleRef.current.value,
        start: startDateTime,
        end: endDateTime,
      })
    );
    restForm();
    closeDialog();
  };

  const editEventHandler = () => {
    const startTimeValue = startTime.current.value;
    const endTimeValue = endTime.current.value;

    dispatch(
      editClone({
        id: eventId,
        title: titleRef.current.value,
        date: dateValue,
        startTime: startTimeValue,
        endTime: endTimeValue,
      })
    );
    const gregorianStartDate = new DateObject({
      date: dateValue[0],
      calendar: persian,
    })
      .convert(gregorian)
      .format("YYYY-MM-DD");

    const gregorianEndDate = new DateObject({
      date: dateValue[1],
      calendar: persian,
    })
      .convert(gregorian)
      .format("YYYY-MM-DD");

    const toEnglishDigits = (str) =>
      str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
    const normalizedStartDate = toEnglishDigits(gregorianStartDate);
    const normalizedEndDate = toEnglishDigits(gregorianEndDate);

    const startDateTime = `${normalizedStartDate}T${startTimeValue}:00`;
    const endDateTime = `${normalizedEndDate}T${endTimeValue}:00`;

    dispatch(
      editEvent({
        id: eventId,
        title: titleRef.current.value,
        start: startDateTime,
        end: endDateTime,
      })
    );

    restForm();
    closeDialog();
  };

  const deleteEventHandler = () => {
    dispatch(removeEvent(eventId));
    dispatch(removeCloneEvent(eventId));
    closeDialog();
    restForm();
  };

  if (editMode) {
    return (
      <dialog
        ref={dialogRef}
        className="backdrop:backdrop-blur-sm  m-auto top-0 right-0 left-0 bottom-0 px-16 py-10 z-20 rounded-md bg-primary dark:bg-darkPrimary dark:text-white overflow-visible "
      >
        <form className="flex flex-col justify-center items-center gap-5 ">
          <div className="w-full">
            <label>عنوان رویداد</label>
            <input
              type="text"
              className="focus:outline-2 focus:outline-double outline-custom rounded px-4 py-2 w-full dark:bg-darkSecondary bg-secondary"
              required
              ref={titleRef}
            />
          </div>

          <div className="w-full">
            <label>زمان شروع</label>
            <input
              type="time"
              className="focus:outline-2 focus:outline-double outline-custom rounded px-4 py-2 w-full dark:bg-darkSecondary bg-secondary"
              required
              ref={startTime}
            />
          </div>

          <div className="w-full flex flex-col  ">
            <label>تاریخ</label>
            <DatePicker
              inputClass="focus:outline-2 focus:outline-double outline-custom rounded px-4 py-2 w-full dark:bg-darkSecondary bg-secondary"
              range
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              value={dateValue}
              onChange={setDateValue}
              minDate={new DateObject({ calendar: persian }).subtract(
                0,
                "days"
              )}
              required
              editable={false}
            />
          </div>

          <div className="w-full">
            <label>زمان پایان</label>
            <input
              type="time"
              className="focus:outline-2 focus:outline-double outline-custom rounded px-4 py-2 w-full dark:bg-darkSecondary bg-secondary"
              required
              ref={endTime}
            />
          </div>

          <div className="flex justify-between gap-1 w-full sm:flex-row flex-col ">
            <button
              onClick={editEventHandler}
              type="button"
              className="bg-green-600 rounded px-4 py-2 w-full hover:scale-90 transition-transform duration-150"
            >
              ویرایش رویداد
            </button>
            <button
              type="button"
              className="bg-red-600 rounded px-4 py-2 w-full hover:scale-90 transition-transform duration-150"
              onClick={deleteEventHandler}
            >
              حذف رویداد
            </button>
          </div>
          <button
            type="button"
            className="absolute -top-1 -right-1 bg-red-500 p-2 rounded-full text-center"
            onClick={closeDialog}
          >
            <IoClose size={22} className="text-white" />
          </button>
        </form>
      </dialog>
    );
  } else {
    return (
      <dialog
        ref={dialogRef}
        className="backdrop:backdrop-blur-sm  m-auto top-0 right-0 left-0 bottom-0 px-16 py-10 z-20 rounded-md bg-primary dark:bg-darkPrimary dark:text-white overflow-visible "
      >
        <form
          className="flex flex-col justify-center items-center gap-5 "
          onSubmit={submitHandler}
        >
          <div className="w-full">
            <label>عنوان رویداد</label>
            <input
              type="text"
              className="focus:outline-2 focus:outline-double outline-custom rounded px-4 py-2 w-full dark:bg-darkSecondary bg-secondary"
              required
              ref={titleRef}
            />
          </div>

          <div className="w-full">
            <label>زمان شروع</label>
            <input
              type="time"
              className="focus:outline-2 focus:outline-double outline-custom rounded px-4 py-2 w-full dark:bg-darkSecondary bg-secondary"
              required
              ref={startTime}
            />
          </div>

          <div className="w-full flex flex-col  ">
            <label>تاریخ</label>
            <DatePicker
              inputClass="focus:outline-2 focus:outline-double outline-custom rounded px-4 py-2 w-full dark:bg-darkSecondary bg-secondary"
              range
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              value={dateValue}
              onChange={setDateValue}
              minDate={new DateObject({ calendar: persian }).subtract(
                0,
                "days"
              )}
              required
              editable={false}
            />
          </div>

          <div className="w-full">
            <label>زمان پایان</label>
            <input
              type="time"
              className="focus:outline-2 focus:outline-double outline-custom rounded px-4 py-2 w-full dark:bg-darkSecondary bg-secondary"
              required
              ref={endTime}
            />
          </div>

          <button
            type="submit"
            className="btn-primary rounded px-4 py-2 w-full hover:scale-90 transition-transform duration-150"
          >
            ثبت رویداد
          </button>
          <button
            type="button"
            className="absolute -top-1 -right-1 bg-red-500 p-2 rounded-full text-center"
            onClick={closeDialog}
          >
            <IoClose size={22} className="text-white" />
          </button>
        </form>
      </dialog>
    );
  }
};

export default Dialog;
