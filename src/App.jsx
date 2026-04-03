import "./App.scss";
import Competitors from "./components/competitors/Competitors";
import Header from "./components/header/Header";
import PaymentModal from "./components/modal/PaymentModal";
import Timer from "./components/timer/Timer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <PaymentModal />
      <Header />
      <Timer />
      <Competitors />
      <Footer />
    </div>
  );
}

export default App;