const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <h1 className="font-bold uppercase text-2xl">Expense Tracker</h1>
      <div className="flex gap-4 text-[16px]">
        <a href="#">Home</a>
        <a href="#">App</a>
        <a href="#">Account</a>
        <a href="#">Export</a>
      </div>
      <button className="px-5 py-1.5 bg-slate-400 rounded-[3px] font-semibold text-[18px]">Login</button>
    </nav>
  );
};

export default Navbar;
