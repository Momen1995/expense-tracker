import Expense from "./Expense";
import Income from "./Income";
import TotalBalance from "./TotalBalance";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";

const TransactionBoard = ({ data, selectOption }) => {
  const incomeData = data.filter((item) => item.category === "income");
  const expenseData = data.filter((item) => item.category === "expense");

  return (
    <div className="w-2/3 flex flex-col gap-5">
      <div className="flex gap-3">
        <TotalBalance />
        <TotalIncome />
        <TotalExpense />
      </div>
      <div className="grid gap-3 grid-cols-2">
        <Income incomeData={incomeData} />
        <Expense expenseData={expenseData} />
      </div>
    </div>
  );
};

export default TransactionBoard;
