const Input = ({ onExpense, onIncome, selectOption }) => {
  return (
    <section className="mt-5">
      <form className="mt-3" aria-label="Expense Tracker Form">
        <div className="bg-sky-600 flex justify-around text-white text-[17px] rounded-[3px]">
          <button
            onClick={() => onExpense("expense")}
            type="button"
            className="bg-red-300 w-1/2 p-2"
          >
            Expense
          </button>
          <button
            onClick={() => onIncome("income")}
            type="button"
            className="bg-green-300 w-1/2 p-2"
          >
            Income
          </button>
        </div>

        <div className="flex flex-col gap-3 px-2 py-3">
          <label htmlFor="category" className="text-gray-700 font-medium">
            Category
          </label>

          {selectOption === "expense" ? (
            <select
              id="category"
              className="border-2 w-full border-transparent focus:border-sky-500 bg-slate-200 px-3 py-2 rounded-[3px]"
            >
              <option value="">Select the expense option</option>
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
              className="border-2 w-full border-transparent focus:border-sky-500 bg-slate-200 px-3 py-2 rounded-[3px]"
            >
              <option value="">Select the income option</option>
              <option value="Education">Salary</option>
              <option value="Food">Outsourcing</option>
              <option value="Health">Bond</option>
              <option value="Bill">Dividend</option>
            </select>
          )}

          <label htmlFor="amount" className="text-gray-700 font-medium">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="border-2 w-full border-transparent focus:border-sky-500 bg-slate-200 px-3 py-2 rounded-[3px] outline-none"
            placeholder="Enter amount"
          />

          <label htmlFor="date" className="text-gray-700 font-medium">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="border-2 w-full border-transparent focus:border-sky-500 bg-slate-200 px-3 py-2 rounded-[3px] outline-none"
          />

          <button
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
