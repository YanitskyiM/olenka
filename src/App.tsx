import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Do you want to know who is the best girl in the world?</h1>
      <Link to="/olenka/reveal">
        <button className="glow-on-hover" type="button">
          Reveal
        </button>
      </Link>
    </>
  );
}

export default App;
