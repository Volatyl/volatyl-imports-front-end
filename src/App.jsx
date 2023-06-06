import { useContext } from "react";
import { ProjectContext } from "./components/context";

function App() {
  const { state, dispatch } = useContext(ProjectContext);

  console.log(state)
  console.log('app')
  return (
    <>
      <h1>VOLATYL IMPORTS</h1>
    </>
  );
}

export default App;
