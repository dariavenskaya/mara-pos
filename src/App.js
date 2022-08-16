import "./App.scss";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Catalog from "./components/Catalog";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="work-zone">
        <Counter />
        <Catalog />
      </div>
    </div>
  );
}
export default App;
