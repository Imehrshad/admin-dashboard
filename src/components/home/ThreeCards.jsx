import React from "react";
import { GrMoney } from "react-icons/gr";
import { LuUsers2 } from "react-icons/lu";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { motion } from "framer-motion";
const ThreeCards = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="lg:flex-[0_0_30%] md:flex-[0_0_32%] flex-[0_0_100%] bg-secondary text-black dark:text-white dark:bg-darkSecondary p-4 rounded-lg flex flex-col gap-2"
      >
        <div className="w-full flex justify-between items-center gap-2">
          <h1 className="font-vazir-regular lg:text-lg md:text-sm text-lg ">
            تعداد مشتریان
          </h1>
          <div className="bg-purple-200 p-2 rounded-full shadow-[0_0_15px] shadow-purple-600">
            <LuUsers2
              color="#6b21a8"
              className="lg:text-[2rem] md:text-[1.5rem] text-[2rem]"
            />
          </div>
        </div>
        <h1 className="lg:text-lg md:text-sm text-lg  font-vazir-regular ">3250</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="lg:flex-[0_0_30%] md:flex-[0_0_32%] flex-[0_0_100%] bg-secondary text-black dark:text-white dark:bg-darkSecondary p-4 rounded-lg flex flex-col gap-2"
      >
        <div className="w-full flex justify-between items-center gap-2">
          <h1 className="font-vazir-regular lg:text-lg md:text-sm text-lg ">
            کالای فروش رفته
          </h1>
          <div className="bg-cyan-200 p-2 rounded-full shadow-[0_0_15px] shadow-cyan-600">
            <RiAlignItemBottomLine
              color="#155e75"
              className="lg:text-[2rem] md:text-[1.5rem] text-[2rem]"
            />
          </div>
        </div>
        <h1 className="lg:text-lg md:text-sm text-lg  font-vazir-regular ">2011</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="lg:flex-[0_0_30%] md:flex-[0_0_32%] flex-[0_0_100%] bg-secondary text-black dark:text-white dark:bg-darkSecondary p-4 rounded-lg flex flex-col gap-2"
      >
        <div className="w-full flex justify-between items-center gap-2">
          <h1 className="font-vazir-regular lg:text-lg md:text-sm text-lg ">
            مبلغ سود این ماه
          </h1>
          <div className="bg-emerald-200 p-2 rounded-full shadow-[0_0_15px] shadow-emerald-600">
            <GrMoney
              color="#047857"
              className="lg:text-[2rem] md:text-[1.5rem] text-[2rem]"
            />
          </div>
        </div>
        <h1 className="lg:text-lg md:text-sm text-lg  font-vazir-regular ">1230450</h1>
      </motion.div>
    </>
  );
};

export default ThreeCards;
