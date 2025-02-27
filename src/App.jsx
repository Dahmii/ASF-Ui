import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Join from "./Components/Join/Join";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Miracles from "./Components/Hero/Miracles";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Join />
      <Banner />
      <Miracles />
      <Footer />
    </div>
  );
}

export default App;
