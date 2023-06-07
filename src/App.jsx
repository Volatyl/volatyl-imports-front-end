import { useContext } from "react";
import { ProjectContext } from "./components/context";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Cars from "./components/cars";
import Filter from "./components/filter";
import Home from "./components/home";
import About from "./components/about";
import Faq from "./components/faq";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import Addcar from "./components/addcar";

function App() {
  const { state, dispatch } = useContext(ProjectContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcar" element={<Addcar />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
