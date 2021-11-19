import { GlobalContext } from "./context/index";
import Decreaser from "./components/Decreaser";
import Increaser from "./components/Increaser";

function App() {
  const { state } = GlobalContext();
  return (
    <>
      <Decreaser />
      <span>{state.counter}</span>
      <Increaser />
    </>
  );
}

export default App;
