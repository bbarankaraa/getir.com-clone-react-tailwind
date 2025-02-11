import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/categories" element={<CategoriesPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
