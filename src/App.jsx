import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import TransactionBoard from "./components/Transaction/TransactionBoard";
import { initialData } from "./Data/data";

const App = () => {
  const [data, setData] = useState(initialData);
  const [selectOption, setSelectOption] = useState("expense");
  console.log(selectOption);

  function handleIncomeSelect() {
    setSelectOption("income");
  }

  function handleExpenseSelect() {
    setSelectOption("expense");
  }

  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <main className="mt-4 flex gap-4">
        <Form
          onExpense={handleExpenseSelect}
          onIncome={handleIncomeSelect}
          selectOption={selectOption}
        />
        <TransactionBoard data={data} selectOption={selectOption} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
