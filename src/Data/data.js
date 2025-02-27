const initialData = [
  {
    id: 1,
    category: "expense",
    amount: 300,
    date: "02/19/2025",
    title: "food",
  },
  {
    id: 2,
    category: "income",
    amount: 700,
    date: "02/19/2025",
    title: "bond",
  },
];

const findIncomeData = (initialData) => {
  const incomeData = initialData.filter((item) => item.category === "income");
  return incomeData;
};

const findExpenseData = (initialData) => {
  const expenseData = initialData.filter((item) => item.category === "expense");
  return expenseData;
};

export { findIncomeData, findExpenseData ,initialData};
