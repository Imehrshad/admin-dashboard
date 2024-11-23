import BarChart from "./components/home/BarChart";
import LineChart from "./components/home/LineChart";
import PieChart from "./components/home/PieChart";
import ThreeCards from "./components/home/ThreeCards";

export default function App() {
  return (
    <div className="flex flex-wrap justify-evenly p-5 lg:gap-5 md:gap-x-2 mb-20 lg:gap-y-10 md:gap-y-3 gap-y-5 dark:bg-darkPrimary dark:text-white rounded-md  bg-primary sm:w-[90%] w-full text-fontColor ">
      <ThreeCards />
      <div className="lg:flex-[0_0_96%] flex-[0_0_100%] dark:bg-darkSecondary dark:text-white rounded-md  bg-secondary  text-fontColor gap-2 lg:p-5 p-2">
        <h1 className="p-2">پر فروش ترین کالاها</h1>
        <LineChart />
      </div>
      <div className="lg:flex-[0_0_46%] flex-[0_0_100%] dark:bg-darkSecondary dark:text-white rounded-md  bg-secondary  text-fontColor gap-2 lg:p-5 p-2">
        <h1 className="p-2">فروش هفته گذشته</h1>
        <BarChart />
      </div>
      <div className="lg:flex-[0_0_46%] flex-[0_0_100%] dark:bg-darkSecondary dark:text-white rounded-md  bg-secondary  text-fontColor gap-2 lg:p-5 p-2 ">
        <h1 className="p-2">تعداد کاربران بر اساس سن</h1>
        <PieChart />
      </div>
    </div>
  );
}
