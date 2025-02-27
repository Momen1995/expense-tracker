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
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  function handleIncomeSelect(text) {
    setSelectOption(text);
  }

  function handleExpenseSelect(text) {
    setSelectOption(text);
  }

  function handleAddData(newData, e) {
    e.preventDefault();

    if (selectOption === "income") {
      const updatedData = [...incomeData, newData];

      //calculate income balance
      const totalIncomeBalance = updatedData.reduce(
        (acc, item) => acc + Number(item.amount),
        0
      );

      //calculate total balance
      const calcTotalBalance = totalBalance + totalIncomeBalance;

      setIncomeData([...incomeData, newData]);
      setTotalIncome(totalIncomeBalance);
      setTotalBalance(calcTotalBalance);
    } else {
      const updatedData = [...expenseData, newData];

      //calculate expense balance
      const totalExpenseBalance = updatedData.reduce(
        (acc, item) => acc + Number(item.amount),
        0
      );

      //calculate total balance
      const calcTotalBalance = totalBalance - totalExpenseBalance;

      setExpenseData(updatedData);
      setTotalExpense(totalExpenseBalance);
      setTotalBalance(calcTotalBalance);
    }
  }

  function handleIncomeDeleteItem(itemId){
    const filterItem = incomeData.filter(item => item.id !== itemId);
    setIncomeData(filterItem)
  }

  function handleExpenseDeleteItem(itemId){
    const filterItem = expenseData.filter(item => item.id !== itemId);
    setExpenseData(filterItem)
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
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
