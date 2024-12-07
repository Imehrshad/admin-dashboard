import { LuUsers2 } from "react-icons/lu";
import MyTable from "../components/MyTable";
import USER_DATA from "../USER_DATA.json";
import InfoCard from "../components/InfoCard";
import { FaUserCheck, FaUserClock } from "react-icons/fa";

const Users = () => {
  const columns = [
    {
      accessorKey: "id",
      header: "ایدی",
    },
    {
      accessorKey: "first_name",
      header: "نام",
    },
    {
      accessorKey: "last_name",
      header: "نام خانوادگی",
    },
    {
      accessorKey: "email",
      header: "ایمیل",
    },
    {
      accessorKey: "occupation",
      header: "شغل",
    },
  ];

  const cardInfo = [
    {
      title: "تعداد کاربرها",
      icon: LuUsers2,
      value: USER_DATA.length,
      color: "104, 174, 237",
    },
    {
      title: "کاربرهای تازه وارد",
      icon: FaUserClock,
      value: 20,
      color: "42, 163, 2",
    },
    {
      title: "کاربرهای فعال",
      icon: FaUserCheck,
      value: USER_DATA.length - 200,
      color: "234, 216, 54",
    },
  ];

  return (
    <div className=" lg:w-[90%] w-full dark:bg-darkPrimary bg-primary dark:text-white p-4 rounded-md mb-20 overflow-auto flex flex-col  gap-7">
      <div className="flex gap-2 flex-wrap basis-full sm:basis-[31%] sm:flex-row flex-col ">
        {cardInfo.map((item, index) => (
          <InfoCard
            value={item.value}
            key={index}
            title={item.title}
            Icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
      <MyTable columns={columns} data={USER_DATA} />
    </div>
  );
};

export default Users;
