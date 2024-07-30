import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import ContactUs from "./pages/ContactUs";
import Faculty from "./pages/Faculty";
import Home from "./pages/Home";
import Students from "./pages/Students";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
