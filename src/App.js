import logo from "./logo.svg";
import "./App.css";
import Child from "./pages/Child";
import Parent from "./pages/Parent";
import { createContext, useState } from "react";
import Counter from "./pages/Counter";
import LongForm from "./pages/LongForm";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = {count, setCount};

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="App">
        <LongForm></LongForm>
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
