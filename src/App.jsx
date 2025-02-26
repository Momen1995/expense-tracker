import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import TransactionBoard from "./components/Transaction/TransactionBoard";
import { initialData } from "./Data/data";

const App = () => {
  const [data, setData] = useState(initialData);
  const [totalBalance, setTotalBalance] = useState(400);
  const [totalIncome, setTotalIncome] = useState(700);
  const [totalExpense, setTotalExpense] = useState(300);

  function handleAddData(newData, e) {
    e.preventDefault();
    const updatedData = [...data, newData];

    //calculate total income
    const newTotalIncome = updatedData
      .filter((item) => item.category === "income")
      .reduce((acc, value) => acc + Number(value.amount), 0);

    //calculate total expense
    const newTotalExpense = updatedData
      .filter((item) => item.category === "expense")
      .reduce((acc, value) => acc + Number(value.amount), 0);

    //calculate total balance
   const newTotalBalance = newTotalIncome - newTotalExpense;

    // Update state
    setData(updatedData);
    setTotalIncome(newTotalIncome);
    setTotalExpense(newTotalExpense);
    setTotalBalance(newTotalBalance);
  }

  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <main className="mt-4 flex gap-4">
        <Form onAdd={handleAddData} />
        <TransactionBoard
          data={data}
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          totalBalance={totalBalance}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
