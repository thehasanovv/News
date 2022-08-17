import "./App.css";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import CategoryPages from "./pages/Category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<CategoryPages />} />
      </Routes>
    </div>
  );
}

export default App;
