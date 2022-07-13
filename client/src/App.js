import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon";
import OnePokemon from "./Pages/OnePokemon";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <main className="h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pokemon" element={<Pokemon/>}/>
          <Route path="/:id" element={<OnePokemon/>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
