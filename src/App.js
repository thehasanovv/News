import "./App.css";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import SelectedPage from "./pages/SelectedPage";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchAllNews } from "./store/actions/newsActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllNews("all"));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/all" />} />
        <Route path="/:category" element={<Main />} />
        <Route path="/news/:id" element={<SelectedPage />} />
      </Routes>
    </div>
  );
}

export default App;
