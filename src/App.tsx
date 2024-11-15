import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Favorites } from "./pages/Favorites/Favorites";
import { useState } from "react";

function App() {
  const [, setShowFavorites] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleToggleFavorites = () => {
    const isFavoritesPage = location.pathname === "/favorite";
    if (isFavoritesPage) {
      setShowFavorites(false);
      navigate("/");
    } else {
      setShowFavorites(true);
      navigate("/favorite");
    }
  };
  return (
  <>
    <Header onToggleFavorites={handleToggleFavorites} />
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home showFavorites={false} />} />
        <Route path="/favorite" element={<Favorites showFavorites={true} />} />
        <Route path="/newBook" element={<Favorites showFavorites={false} />} />
      </Routes>

      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 py-4 text-center">
        <p className="text-gray-400">
          © 2024 Biblioteca Virtual | Todos os direitos reservados,0
        </p>
      </footer>
    </div>
  </>
  );
}

export default App;
