import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Join from "./Components/Join/Join";
import Banner from "./Components/Banner/Banner";
import Miracles from "./Components/Miracles/Miracles";
import NotFound from "./Pages/NotFound/NotFound";
import Modal from "./Components/Modal/Modal";

function Home() {
  return (
    <>
      <Modal />
      <Hero />
      <Join />
      <Banner />
      <Miracles />
    </>
  );
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Other valid routes should be added here */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all 404 route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
