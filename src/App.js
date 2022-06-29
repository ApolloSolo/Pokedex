import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon";

function App() {
  return (
    <Router>
      <div className="h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pokemon" element={<Pokemon/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
