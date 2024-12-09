import { useState } from "react";
import { Input } from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../store";
import { login } from "../store/reducers/authReducer/auth";
import { Link } from "react-router-dom";

function FormLoginBook() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(
    (state: RootReducer) => state.authBooksUser
  );
  const generateToken = () => {
    return window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
  };

  const handleLoginBook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !isAuthenticated &&
      email === "email@exemplo.com" &&
      password === "123"
    ) {
      const token = generateToken();
      const user = { email };

      localStorage.setItem("user", JSON.stringify({ user, token }));
      dispatch(login(user));
    }
  };
  return (
    <form onSubmit={handleLoginBook}>
      <div className="mt-4 block w-full">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          inputPros={{
            type: "email",
            placeholder: "Digite seu e-mail",
          }}
        />
      </div>
      <div className="mt-4 block">
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          inputPros={{
            type: "password",
            placeholder: "Digite sua senha",
          }}
        />
        <Link to="/" className="float-end mb-4  text-neutral-300 hover:text-neutral-400">Esqueceu a senha ?</Link>
      </div>
      <div className="mt-4 block">
        <button
          className="bg-teal-600 text-gray-900 p-2 rounded-md hover:bg-teal-400 w-full"
          type="submit"
        >
          Entra
        </button>
      </div>
      <div className="mt-4 block">
        <button
          className="bg-teal-600 text-gray-900 p-2 rounded-md hover:bg-teal-400 w-full"
          type="submit"
        >
          Cadastra novo usuario
        </button>
      </div>
    </form>
  );
}
export default FormLoginBook;
