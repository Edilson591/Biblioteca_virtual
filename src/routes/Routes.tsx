import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Favorites } from "../pages/Favorites/Favorites";
import { RootReducer } from "../components/store";
import { useSelector } from "react-redux";
import NewBook from "../pages/newBook/newBook";
import LoginBook from "../pages/Login/LoginBook";

function RoutesBooks() {
    const { isAuthenticated} = useSelector(
        (state: RootReducer) => state.authBooksUser
      );
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favorite" element={<Favorites/>} />
          <Route
            path="/newBook"
            element={isAuthenticated ? <NewBook /> : <LoginBook/>}
          />
      </Routes>
    </>
  );
}

export default RoutesBooks;
