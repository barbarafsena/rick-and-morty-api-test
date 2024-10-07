import Home from "./pages/Home";
import Characters from "./pages/Characters";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Erro404 from "./pages/404";

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/rick-and-morty-test/character" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="*" element={<Erro404 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
