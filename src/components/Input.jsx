import { useState } from "react";

const Input = ({ onAdd }) => {
  const [selectOption, setSelectOption] = useState("expense");
  console.log(selectOption);
  const [inputData, setInputData] = useState({
    id: crypto.randomUUID(),
    category: selectOption === "income" ? "income" : "expense",
    amount: "",
    date: "",
    title: "",
  });

  function handleIncomeSelect() {
    setSelectOption("income");

    setInputData((preInputData =>({
      ...preInputData,
      category : "income"
    })))
  }

  function handleExpenseSelect() {
    setSelectOption("expense");

    setInputData((preInputData) => ({
      ...preInputData,
      category: "expense",
    }));
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  console.log(inputData);

  return (
    <section className="mt-5">
      <form className="mt-3" aria-label="Expense Tracker Form">
        <div className="bg-sky-600 flex justify-around text-white text-[17px] rounded-[3px]">
          <button
            onClick={() => handleExpenseSelect("expense")}
            type="button"
            className="bg-red-300 w-1/2 p-2"
          >
            Expense
          </button>
          <button
            onClick={() => handleIncomeSelect("income")}
            type="button"
            className="bg-green-300 w-1/2 p-2"
          >
            Income
          </button>
        </div>

        <div className="flex flex-col gap-3 px-2 py-3">
          <label htmlFor="category" className="text-gray-700 font-medium">
            Category
            {selectOption === "expense" ? (
              <select
                id="category"
                name="title"
                value={inputData.title}
                onChange={handleChange}
                className="border-2 w-full border-transparent focus:border-sky-500 bg-slate-200 px-3 py-2 rounded-[3px] mt-2"
              >
                <option value="Education">Education</option>
                <option value="Food">Food</option>
                <option value="Health">Health</option>
                <option value="Bill">Bill</option>
                <option value="Insurance">Insurance</option>
                <option value="Tax">Tax</option>
                <option value="Transport">Transport</option>
              </select>
            ) : (
              <select
                id="category"
                name="title"
                value={inputData.title}
                onChange={handleChange}
                className="border-2 w-full border-transparent focus:border-sky-500 bg-slate-200 px-3 py-2 rounded-[3px]"
              >
                <option value="Salary">Salary</option>
                <option value="Outsourcing">Outsourcing</option>
                <option value="Bond">Bond</option>
                <option value="Dividend">Dividend</option>
              </select>
            )}
          </label>

          <label htmlFor="amount" className="text-gray-700 font-medium">
            Amount
            <input
              type="number"
              id="amount"
              name="amount"
              value={inputData.amount}
              onChange={handleChange}
              className="border-2 w-full border-transparent focus:border-sky-500 bg-slate-200 px-3 py-2 rounded-[3px] outline-none mt-2"
              placeholder="Enter amount"
            />
          </label>

          <label htmlFor="date" className="text-gray-700 font-medium">
            Date
            <input
              type="date"
              id="date"
              name="date"
              value={inputData.date}
              onChange={handleChange}
              className="mt-2 border-2 w-full border-transparent focus:border-sky-500 bg-slate-200 px-3 py-2 rounded-[3px] outline-none"
            />
          </label>

          <button
            onClick={(e) => onAdd(inputData, e)}
            type="submit"
            className="bg-sky-900 px-4 py-2 text-white text-[18px] rounded-[5px] hover:bg-sky-800 transition"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default Input;
