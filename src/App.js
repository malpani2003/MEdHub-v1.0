// import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./Components/Error Page/NoPage";
import { useLocation } from "react-router-dom";
function App() {
  // const location = useLocation();
  // const currentPath = location.pathname;
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
