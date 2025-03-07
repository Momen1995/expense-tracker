import Expense from "./Expense";
import Income from "./Income";
import TotalBalance from "./TotalBalance";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";

const TransactionBoard = ({
  incomeData,
  expenseData,
  totalIncome,
  totalExpense,
  totalBalance,
  onIncomeDelete,
  onExpenseDelete,
  onItemSort,
  onExpenseSort,
  onItemFilter,
 
}) => {
  return (
    <div className="w-2/3 flex flex-col gap-5">
      <div className="flex gap-3">
        <TotalBalance totalBalance={totalBalance} />
        <TotalIncome totalIncome={totalIncome} />
        <TotalExpense totalExpense={totalExpense} />
      </div>
      <div className="grid gap-3 grid-cols-2">
        <Income
          incomeData={incomeData}
          onIncomeDelete={onIncomeDelete}
          onItemSort={onItemSort}
          onItemFilter={onItemFilter}
         
        />
        <Expense
          expenseData={expenseData}
          onExpenseDelete={onExpenseDelete}
          onExpenseSort={onExpenseSort}
        />
      </div>
    </div>
  );
};

export default TransactionBoard;
