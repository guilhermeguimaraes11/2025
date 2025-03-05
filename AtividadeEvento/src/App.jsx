import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEvento from "./pages/listEvento";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/evento" element={<ListEvento />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
