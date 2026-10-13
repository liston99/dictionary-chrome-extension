import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Options from "./pages/Options";
import WordHistory from "./pages/WordHistory"
import { useState } from "react";

function App() {
  const [history, setHistory] = useState('')
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route exact path="/options" element={<Options />}/>
      <Route path="/WordHistory" element={<WordHistory />}/>
    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
