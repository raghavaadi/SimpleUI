import { Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import "./App.css";
function App() {
  return (
    <div style={{ display: "flex", minWidth: "100vh" }}>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Hello</h2>
        <p>This is Raghav here</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
