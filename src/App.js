import "./App.css";

import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";

const App = () => {
  return (
    // BEM convention
    <div className="app">
      <Header />
      <Home />
    </div>
  );
};

export default App;
