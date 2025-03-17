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
  const location = useLocation();
  // Check if the current path should display the NotFound page
  const is404Page =
    location.pathname !== "/" && !location.pathname.startsWith("/home");

  // Don't render the layout components for 404 pages
  if (is404Page) {
    return <NotFound />;
  }

  // Regular layout for valid routes
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
          {/* Add any other valid routes here */}
          {/* No need for a catch-all route here as Layout handles it */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
