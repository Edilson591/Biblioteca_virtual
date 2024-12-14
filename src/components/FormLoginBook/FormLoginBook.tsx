import { useState } from "react";
import { Input } from "../Input/Input";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/authReducer/auth";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../../services/apiUsers/apiUsers";

function FormLoginBook() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();

  const handleLoginBook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await loginUser({ email, password }).unwrap();
      if (response) {
        const { token, message } = response;
        localStorage.setItem("user", JSON.stringify({ token }));
        dispatch(login(response));
        alert(message);
      }
    } catch (error) {
      console.error("Erro de login:", error);
      const errorMessage = (error as { data: { error: string } }).data.error;
      if (errorMessage) {
        console.log(errorMessage);
      }
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
        <Link
          to="/"
          className="float-end mb-4  text-neutral-300 hover:text-neutral-400"
        >
          Esqueceu a senha ?
        </Link>
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
          type="button"
        >
          Cadastra novo usuario
        </button>
      </div>
    </form>
  );
}
export default FormLoginBook;
