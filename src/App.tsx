import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/About/AboutPage";
import Home from "./components/Home/Home";
import QuotePage from "./components/Quote/QuotePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
