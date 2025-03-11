import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Join from "./Components/Join/Join";
import Banner from "./Components/Banner/Banner";
import Miracles from "./Components/Miracles/Miracles";
import NotFound from "./Pages/NotFound/NotFound";

function Home() {
  return (
    <>
      <Hero />
      <Join />
      <Banner />
      <Miracles />
    </>
  );
}

function Layout({ children }) {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/NotFound";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      {children}
      {!hideNavFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
