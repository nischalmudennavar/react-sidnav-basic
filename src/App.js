import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="App">
      <header>
        <span
          className='button'
          onClick={() => setShowNav(!showNav)}
        >
          {"🧑🏻‍🚀 Click Me "} 
        </span>{" "}
        React Side-Nav Logic with Prop
        <span>{"⚙️"}</span>
      </header>
      <Navbar show={showNav} />
    </div>
  );
}

export default App;
