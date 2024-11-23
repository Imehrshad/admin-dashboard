import MyTable from "../components/MyTable";
import InfoCard from "../components/InfoCard";
import PRODCUT_DATA from "../PRODUCT_DATA.json";
import { PiShoppingBag } from "react-icons/pi";

const ProductsPage = () => {
  const newProductData = PRODCUT_DATA.map((item) => {
    return {
      ...item,
      price: item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
    };
  });

  const columns = [
    {
      accessorKey: "id",
      header: "ایدی",
    },
    {
      accessorKey: "productName",
      header: "نام محصول",
    },
    {
      accessorKey: "price",
      header: "قیمت",
    },
    {
      accessorKey: "amount",
      header: "تعداد",
    },
  ];

  const cardInfo = [
    {
      title: "تعداد محصولات",
      icon: PiShoppingBag,
      value: PRODCUT_DATA.length,
      color: "104, 174, 237",
    },
    {
      title: "محصولات غیرفعال",
      icon: PiShoppingBag,
      value: 20,
      color: "186, 12, 0",
    },
    {
      title: "محصولات جدید",
      icon: PiShoppingBag,
      value: PRODCUT_DATA.length - 68,
      color: "42, 163, 2",
    },
  ];

  return (
    <div className=" lg:w-[90%] w-full dark:bg-darkPrimary bg-primary dark:text-white p-4 rounded-md mb-20 overflow-auto flex flex-col gap-7">
      <div className="flex gap-2 flex-wrap">
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
      <MyTable columns={columns} data={newProductData} />
    </div>
  );
};

export default ProductsPage;
