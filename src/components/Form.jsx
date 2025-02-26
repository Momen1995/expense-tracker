import Input from "./Input";

const Form = ({ onExpense, onIncome, selectOption }) => {
  return (
    <>
      <div className="w-1/3 border-gray-200 border-2 px-3 pt-3 py-1 rounded-[3px] bg-gray-100">
        <h2 className="text-2xl font-semibold text-center">Add New Expense</h2>
        <p className="text-center text-xs text-slate-800 mt-1">
          Enter the details of your expense
        </p>

        <Input
          onExpense={onExpense}
          onIncome={onIncome}
          selectOption={selectOption}
        />
      </div>
    </>
  );
};

export default Form;
