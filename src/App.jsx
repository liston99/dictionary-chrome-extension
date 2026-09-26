import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Options from "./pages/Options";

function App() {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/options" element={<Options />}/>
    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
