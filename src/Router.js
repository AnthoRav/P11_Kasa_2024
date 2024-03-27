// @ts-nocheck
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Logement from "./pages/Logements/Logement";
import About from "./pages/About/About";

function Router() {
  return (
    <Routes>
      <Route path="/logements/:id" element={<Logement />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}
export default Router;
