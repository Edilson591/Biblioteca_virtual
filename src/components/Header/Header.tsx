import { Link } from "react-router-dom";
import { HeaderProps } from "./interfaceHeader";

export default function Header({onToggleFavorites}: HeaderProps) {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex flex-col gap-4 sm:flex-row sm:gap-0 justify-between items-center mx-auto max-w-screen-xl">
        <h1 className="text-3xl font-bold text-neutral-300">
          Biblioteca Virtual
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="./"
              className="text-lg text-neutral-300 hover:text-neutral-400"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="./favorite"
              className="text-lg text-neutral-300 hover:text-neutral-400"
            >
              <button onClick={onToggleFavorites}>Favoritos</button>
            </Link>
          </li>
          <li>
            <Link
              to="./newBook"
              className="text-lg text-neutral-300 hover:text-neutral-400"
            >
              Adicionar Livro
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
