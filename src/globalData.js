import { AiOutlineProduct } from "react-icons/ai";
import { LuCalendarDays, LuUsers2 } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";

export const sidebarItems = [
  { path: "", name: "داشبورد", icon: RxDashboard },
  { path: "products", name: "محصولات", icon: AiOutlineProduct },
  { path: "users", name: "کاربران", icon: LuUsers2 },
  { path: "calendar", name: "تقویم", icon: LuCalendarDays  },
];

export const LineChartData = {
  labels: [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ],
  datasets: [
    {
      label: "فروش کفش",
      data: [320, 200, 320, 380, 320, 200, 330],
      borderColor: "red",

      fill: {
        target: "origin", // 3. Set the fill options
        above: "rgba(255, 0, 0, 0.6)",
      },
    },
    {
      label: "فروش کالا دیجیتال",
      data: [300, 460, 402, 145, 250, 325, 423],
      borderColor: "blue",

      fill: {
        target: "origin", // 3. Set the fill options
        above: "rgba(69, 88, 255 ,0.6)",
      },
    },
    {
      label: "فروش کالا سوپر مارکتی",
      data: [250, 230, 345, 340, 320, 244, 311],
      borderColor: "green",
      fill: {
        target: "origin", // 3. Set the fill options
        above: "rgba(103, 255, 69 ,0.6)",
      },
    },
  ],
};
export const BarChartData = {
  labels: [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ],
  datasets: [
    {
      label: "فروش محصول",
      data: [400, 200, 310, 324, 166, 105, 423],
      borderColor: "red",
      backgroundColor: "red",
      borderWidth: 1,
    },
  ],
};
export const PieChartData = {
  labels: ["15-20", "21-30", "31-40", "40-60"],
  datasets: [
    {
      label: "فروش محصول",
      data: [300, 400, 200, 50],
      backgroundColor: ["red", "green", "yellow", "blue"],
      hoverOffset: 10,
    },
  ],
};
