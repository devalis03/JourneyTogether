import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
      </Routes>
    </>
  );
}

export default App;
