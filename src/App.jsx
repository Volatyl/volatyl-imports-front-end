import { useContext } from "react";
import { ProjectContext } from "./components/context";
import Header from "./components/header";
import { Routes, Route } from "react-router";
import Cars from "./components/cars";
import Filter from "./components/filter";

function App() {
  const { state, dispatch } = useContext(ProjectContext);

  return (
    <>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes> */}
      <Filter/>
      {/* <Cars /> */}
    </>
  );
}

export default App;
