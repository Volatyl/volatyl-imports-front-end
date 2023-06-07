import { useContext } from "react";
import { ProjectContext } from "./components/context";
import Header from "./components/header";

function App() {
  const { state, dispatch } = useContext(ProjectContext);

  console.log(state);
  console.log("app");
  return (
    <>
      <Header />
    </>
  );
}

export default App;
