import logo from "./logo.svg";
import "./App.css";
import Counterone from "./view/Counterone";
import Countertwo from "./view/Countertwo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counterone />
        <Countertwo />
      </header>
    </div>
  );
}

export default App;
