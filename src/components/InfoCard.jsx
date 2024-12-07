import React from "react";
import { motion } from "framer-motion";

const InfoCard = ({ value, title, Icon, color }) => {
  const colorBuilder = (color, state) => {
    let newColor = `rgb(${color},0.2)`;
    switch (state) {
      case "background":
        return newColor;
      case "iconColor":
        return `rgb(${color})`;
    }
  };

  return (

      <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className="grow bg-secondary text-black dark:text-white dark:bg-darkSecondary p-4 rounded-lg flex flex-col gap-2">
        <div className="w-full flex justify-between items-center gap-2">
          <h1 className="font-vazir-regular lg:text-lg md:text-base text-lg ">
            {title}
          </h1>
          <div
            style={{
              backgroundColor: colorBuilder(color, "background"),
              boxShadow: `0 0 15px ${colorBuilder(color, "background")}`,
            }}
            className={` p-2 rounded-full shadow-[0_0_15px] backdrop-blur flex justify-center items-center`}
          >
            <Icon
              color={colorBuilder(color, "iconColor")}
              className="lg:text-[2rem] md:text-[1.5rem] text-[2rem]  flex justify-center items-center"
            />
          </div>
        </div>
        <h1 className="lg:text-lg md:text-base text-lg font-vazir-regular ">{value}</h1>
      </motion.div>
  );
};

export default InfoCard;
