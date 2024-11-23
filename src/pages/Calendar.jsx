import React from "react";
import MyCalendar from "../components/MyCalendar";
import { motion } from "framer-motion";

const Calendar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className="sm:w-[90%] w-full py-6 px-4 sm:pt-10 sm:pr-10 sm:pl-10 sm:pb-5 bg-primary dark:bg-darkPrimary mb-20 rounded-lg dark:text-white"
    >
      <MyCalendar />
    </motion.div>
  );
};

export default Calendar;
