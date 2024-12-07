import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PiSortAscendingLight, PiSortDescendingLight } from "react-icons/pi";
import { motion } from "framer-motion";

const MyTable = ({ data, columns }) => {
  const [isTextWrapped, setIsTextWrapped] = useState(false);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
      filters: [],
      sorting: [],
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
    >
      <div className="flex gap-4 mb-4">
        <div className="flex items-center justify-between w-full">
          <input
            className="border-0 dark:bg-darkSecondary bg-secondary py-2 px-4 rounded focus:outline-double focus:border-0 focus:outline-custom"
            placeholder="جستجو کنید..."
            onChange={(e) => table.setGlobalFilter(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <span className="mr-2 sm:text-base text-xs whitespace-nowrap">
              تعداد نمایش:
            </span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
              className=" sm:text-base text-xs whitespace-nowrap py-[0.38rem] dark:bg-darkSecondary rounded  px-3 mx-1 bg-primary focus:outline-none"
            >
              {[5, 10, 15, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <table className="min-w-full table-auto border-collapse border dark:border-zinc-600">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-zinc-400  dark:bg-zinc-700">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-2 px-4 font-medium text-sm sm:text-base text-white border dark:border-zinc-600 cursor-pointer"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex justify-center items-center">
                    <p>{header.column.columnDef.header}</p>
                    {header.column.getIsSorted() !== false && (
                      <span>
                        {header.column.getIsSorted() === "asc" ? (
                          <PiSortAscendingLight size={20} />
                        ) : (
                          <PiSortDescendingLight size={20} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-zinc-200 dark:hover:bg-zinc-600"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="py-2 px-4 border text-center text-sm sm:text-base dark:border-zinc-600 hover:border-zinc-50 "
                >
                  <p className={`sm:text-sm sm:max-w-full max-w-[12ch] break-words`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* pagination */}
      <div className="flex justify-between items-center mt-4 w-full">
        <div className="flex items-center justify-between sm:justify-start sm:gap-3 gap-1 w-full">
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 ml-2 dark:bg-darkSecondary bg-gray-200 rounded disabled:opacity-50 sm:text-base text-xs whitespace-nowrap"
          >
            آخرین صفحه
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 ml-2 dark:bg-darkSecondary bg-gray-200 rounded disabled:opacity-50 sm:text-base text-xs whitespace-nowrap"
          >
            <GrNext />
          </button>
          <span className="flex gap-1">
            <p>صفحه </p>
            <p className="whitespace-nowrap ">
              {table.getState().pagination.pageIndex + 1} از{" "}
              {table.getPageCount()}
            </p>{" "}
          </span>

          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 mr-2 dark:bg-darkSecondary bg-gray-200 rounded disabled:opacity-50 sm:text-base text-xs whitespace-nowrap"
          >
            <GrPrevious />{" "}
          </button>

          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 mr-2 dark:bg-darkSecondary bg-gray-200 rounded disabled:opacity-50 sm:text-base text-xs whitespace-nowrap"
          >
            صفحه اول
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MyTable;
