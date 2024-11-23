import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { PieChartData } from "../../globalData";
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  maintainAspectRatio: false, // Allows the chart to fill the container
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const PieChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="w-full h-[20rem]"
    >
      <Pie data={PieChartData} options={options} />
    </motion.div>
  );
};

export default PieChart;
