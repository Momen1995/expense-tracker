import { TbPaperBagOff } from "react-icons/tb";
import { RiSortDesc } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaFilter } from "react-icons/fa6";

const Expense = ({ expenseData, onExpenseDelete, onExpenseSort }) => {
  return (
    <section className="bg-gray-100 ps-3 py-3 pe-2 border-1 border-slate-200 rounded-[3px]">
      <div className=" flex justify-between">
        <div className="flex gap-2">
          <TbPaperBagOff className="bg-red-500 text-3xl rounded text-gray-800" />
          <p className="text-xl font-semibold text-gray-800">Expense</p>
        </div>
        <div className="flex gap-2">
          <button onClick={onExpenseSort}>
            <RiSortDesc className=" text-xl" />
          </button>
          <button>
            <FaFilter className=" text-xl" />
          </button>
        </div>
      </div>

      <ul className="mt-5 overflow-y-scroll h-48">
        {expenseData.length > 0 ? (
          expenseData.map((item) => (
            <li
              key={item.id}
              className="bg-slate-200 px-2 py-3 rounded-[3px] text-[16px] border-b-[1px] border-slate-300 mb-2 flex justify-between"
            >
              <div>
                <p className="text-xl font-semibold">${item.title}</p>
                <span className="text-xs">{item.date}</span>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <p>{item.amount}$</p>
                <div className="flex gap-2">
                  <button className="bg-sky-400 p-.5 rounded-[2px]">
                    <MdModeEditOutline className="text-xl" />
                  </button>
                  <button
                    onClick={() => onExpenseDelete(item.id)}
                    className="bg-gray-400 p-.5 rounded-[2px]"
                  >
                    <MdOutlineDeleteOutline className="text-xl" />
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-600 text-center mt-5 text-2xl ">
            No data found 😟
          </p>
        )}
      </ul>
    </section>
  );
};

export default Expense;
