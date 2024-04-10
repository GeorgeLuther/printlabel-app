import "./App.css";
import { Routes, Route } from "react-router-dom";
import LotLabel from "./components/LotLabel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>This is the main page content.</p>} />
      <Route path="/lot_label" element={<LotLabel />} />
    </Routes>
  );
}

export default App;
