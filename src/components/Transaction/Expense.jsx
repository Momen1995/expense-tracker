import { TbPaperBagOff } from "react-icons/tb";
import { RiSortDesc } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaFilter } from "react-icons/fa6";

const Expense = ({ expenseData }) => {
  return (
    <section className="bg-gray-100 ps-3 py-3 pe-2 border-1 border-slate-200 rounded-[3px]">
      <div className=" flex justify-between">
        <div className="flex gap-2">
          <TbPaperBagOff className="bg-red-500 text-3xl rounded text-gray-800" />
          <p className="text-xl font-semibold text-gray-800">Expense</p>
        </div>
        <div className="flex gap-2">
          <RiSortDesc className=" text-xl" />
          <FaFilter className=" text-xl" />
        </div>
      </div>

      <ul className="mt-5 overflow-y-scroll h-48">
        {expenseData.map((data) => (
          <li key={data.id} className="bg-slate-200 px-2 py-3 rounded-[3px] text-[16px] border-b-[1px] border-slate-300 mb-2 flex justify-between">
            <div>
              <p className="text-xl font-semibold">{data.title}</p>
              <span className="text-xs">{data.date}</span>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <p>{data.amount}tk</p>
              <div className="flex gap-1">
                <CiEdit className="text-xl" />
                <MdOutlineDeleteOutline className="text-xl" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Expense;
