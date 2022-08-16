import React from "react";
import "./App.scss";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Catalog from "./components/Catalog";

// export const ItemsContext = React.createContext();

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="work-zone">
        {/* <ItemsContext.Provider value={{ summ, setSumm }}> */}
        <Counter />
        <Catalog />
        {/* </ItemsContext.Provider> */}
      </div>
    </div>
  );
}
export default App;
