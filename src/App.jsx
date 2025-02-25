import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import TransactionBoard from "./components/Transaction/TransactionBoard";

const App = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <main className="mt-4 flex gap-4">
        <Form />
        <TransactionBoard />
      </main>
      <Footer />
    </div>
  );
};

export default App;
