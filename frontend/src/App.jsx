import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div class="bg-neutral-800 min-h-screen">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home key={location.key}/>} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
