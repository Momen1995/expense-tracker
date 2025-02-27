import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import TransactionBoard from "./components/Transaction/TransactionBoard";
import { findExpenseData, findIncomeData, initialData } from "./Data/data";

const App = () => {
  const [incomeData, setIncomeData] = useState(findIncomeData(initialData));
  const [expenseData, setExpenseData] = useState(findExpenseData(initialData));
  const [selectOption, setSelectOption] = useState("expense");
  const [totalBalance, setTotalBalance] = useState(400);
  const [totalIncome, setTotalIncome] = useState(700);
  const [totalExpense, setTotalExpense] = useState(300);
  const [isIncomeSortedAsc, setIsIncomeSortedAsc] = useState(false);
  const [isExpenseSortedAsc, setIsExpenseSortedAsc] = useState(false);

  // Update Balances
  function updateBalances(
    updatedIncome = incomeData,
    updatedExpense = expenseData
  ) {
    const totalIncomeBalance = updatedIncome.reduce(
      (acc, item) => acc + Number(item.amount),
      0
    );
    const totalExpenseBalance = updatedExpense.reduce(
      (acc, item) => acc + Number(item.amount),
      0
    );
    setTotalIncome(totalIncomeBalance);
    setTotalExpense(totalExpenseBalance);
    setTotalBalance(totalIncomeBalance - totalExpenseBalance);
  }

  function handleIncomeSelect() {
    setSelectOption("income");
  }

  function handleExpenseSelect() {
    setSelectOption("expense");
  }

  function handleAddData(newData, e) {
    e.preventDefault();

    if (selectOption === "income") {
      const updatedData = [...incomeData, newData];
      setIncomeData(updatedData);
      updateBalances(updatedData, expenseData);
    } else {
      const updatedData = [...expenseData, newData];
      setExpenseData(updatedData);
      updateBalances(incomeData, updatedData);
    }
  }

  // Income Delete
  function handleIncomeDeleteItem(itemId) {
    const updatedIncome = incomeData.filter((item) => item.id !== itemId);
    setIncomeData(updatedIncome);
    updateBalances(updatedIncome, expenseData);
  }

  // Expense Delete
  function handleExpenseDeleteItem(itemId) {
    const updatedExpense = expenseData.filter((item) => item.id !== itemId);
    setExpenseData(updatedExpense);
    updateBalances(incomeData, updatedExpense);
  }

  // Income Sort (Toggle)
  function handleIncomeSortData() {
    const sortedIncome = [...incomeData].sort((a, b) =>
      isIncomeSortedAsc ? a.amount - b.amount : b.amount - a.amount
    );
    setIncomeData(sortedIncome);
    setIsIncomeSortedAsc(!isIncomeSortedAsc);
    updateBalances(sortedIncome, expenseData);
  }

  // Expense Sort (Toggle)
  function handleExpenseSortData() {
    const sortedExpense = [...expenseData].sort((a, b) =>
      isExpenseSortedAsc ? a.amount - b.amount : b.amount - a.amount
    );
    setExpenseData(sortedExpense);
    setIsExpenseSortedAsc(!isExpenseSortedAsc);
    updateBalances(incomeData, sortedExpense);
  }

  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <main className="mt-4 flex gap-4">
        <Form
          onAdd={handleAddData}
          selectOption={selectOption}
          handleIncomeSelect={handleIncomeSelect}
          handleExpenseSelect={handleExpenseSelect}
        />
        <TransactionBoard
          incomeData={incomeData}
          expenseData={expenseData}
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          totalBalance={totalBalance}
          onIncomeDelete={handleIncomeDeleteItem}
          onExpenseDelete={handleExpenseDeleteItem}
          onItemSort={handleIncomeSortData}
          onExpenseSort={handleExpenseSortData}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
