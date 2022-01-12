import "./App.css";
import Header from "./Components/Header";
import PageNotFound from "./Components/PageNotFound";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./Components/Students";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/students" element={<Students />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
