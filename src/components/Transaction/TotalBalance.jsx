const TotalBalance = ({ totalBalance }) => {
  const negativeBalance =
    totalBalance < 0 ? "text-3xl mt-1 text-red-600" : "text-3xl mt-1";
  return (
    <div className="border-2 border-gray-200 w-1/3 px-8 py-6">
      <h3 className="text-[17px] font-semibold text-sky-600">Total Balance</h3>
      <h1 className={`${negativeBalance}`}>${totalBalance}</h1>
    </div>
  );
};

export default TotalBalance;
