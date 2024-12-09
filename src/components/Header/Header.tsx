import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/reducers/authReducer/auth";
import { RootReducer } from "../store";

export default function Header() {
  const dispatch = useDispatch();
  const handleLog = () => {
    dispatch(logout());
  };
  const { isAuthenticated } = useSelector(
    (state: RootReducer) => state.authBooksUser
  );
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex flex-col gap-4 sm:flex-row sm:gap-0 justify-between items-center mx-auto max-w-screen-xl">
        <h1 className="text-3xl font-bold text-neutral-300">
          Biblioteca Virtual
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-lg text-neutral-300 hover:text-neutral-400"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/favorite"
              className="text-lg text-neutral-300 hover:text-neutral-400"
            >
              Favoritos
            </Link>
          </li>
          <li>
            <Link
              to="/newBook"
              className="text-lg text-neutral-300 hover:text-neutral-400"
            >
              Adicionar Livro
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <button
                onClick={handleLog}
                className="bg-teal-600 text-gray-900 p-2 rounded-md hover:bg-teal-400 w-full"
              >
                Sair
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
