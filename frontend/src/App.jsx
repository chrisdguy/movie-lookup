import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <MovieProvider>
      <div className="bg-neutral-800">
        <div className="min-h-screen 3xl:max-w-8xl mx-auto bg-neutral-800 shadow-2xl/500">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home key={location.key} />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
