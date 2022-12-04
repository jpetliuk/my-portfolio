import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import KlapTools from "./pages/KlapTools";
import TargetGym from "./pages/TargetGym";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project/klap-tools" element={<KlapTools />}></Route>
        <Route path="project/target-gym" element={<TargetGym />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
