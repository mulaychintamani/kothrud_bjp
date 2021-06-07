import "./App.css";
import Header from "./components/Commom/Header/Header";
import Footer from "./components/Commom/Footer/Footer";
import HomePage from "./components/HomeScreen/Home";
function App() {
  return (
    <div className="default_body">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
