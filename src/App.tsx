import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-7xl font-bold max-w-3xl mb-8">
        Do you want to know who is the best girl in the world?
      </h1>
      <Link to="/olenka/reveal">
        <button className="glow-on-hover" type="button">
          Reveal
        </button>
      </Link>
        <footer className='absolute pb-2 transform left-1/2 -translate-x-1/2 bottom-0'>
            <Link to="/olenka/form-test">
                Contact Me
            </Link>
        </footer>
    </>
  );
}

export default App;
