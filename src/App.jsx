import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Student/:id" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;