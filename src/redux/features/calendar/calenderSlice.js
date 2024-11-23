import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  cloneEvents: [],
};
export const calendarSlice = createSlice({
  name: "calendar slice",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events = [...state.events, action.payload];
    },
    addCloneEvent: (state, action) => {
      state.cloneEvents = [...state.cloneEvents, action.payload];
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter((item) => item.id !== action.payload);
    },
    removeCloneEvent: (state, action) => {
      state.cloneEvents = state.cloneEvents.filter(
        item => item.id !== action.payload
      );
    },
    editEvent: (state, action) => {
      state.events = state.events.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    editClone: (state, action) => {
      state.events = state.events.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
  },
});

export const {
  addEvent,
  removeEvent,
  editEvent,
  addCloneEvent,
  editClone,
  removeCloneEvent,
} = calendarSlice.actions;
export default calendarSlice.reducer;
