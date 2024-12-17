import { useState } from "react";
import { Input } from "../Input/Input";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/authReducer/auth";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../../services/apiUsers/apiUsers";
import Spinner from "../SpinnerComponent/Spinner";

function FormLoginBook() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isdisabled, setIsDisabled] = useState<boolean>(false);
  const [errorUser, setErrorUser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();

  const handleLoginBook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await loginUser({ email, password }).unwrap();
      setIsDisabled(true);
      setLoading(false);
      if (response) {
        const { token } = response;
        localStorage.setItem("user", JSON.stringify({ token }));
        dispatch(login(response));
      }
    } catch (error) {
      console.error("Erro de login:", error);
      setLoading(false);
      const errorMessage = (error as { data: { error: string } }).data.error;
      if (errorMessage) {
        setErrorUser(true);
        console.log(errorMessage);
      }
    }
  };
  return (
    <form onSubmit={handleLoginBook}>
      <div className="mt-4 block w-full">
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorUser(false);
          }}
          value={email}
          label="Email: "
          inputPros={{
            name: "email",
            type: "email",
            placeholder: "Digite seu e-mail",
            className: errorUser ? "border-red-500" : "",
          }}
        />
        {errorUser && (
          <p className="text-red-500 text-sm mt-1">Email ou senha incorretos</p>
        )}
      </div>
      <div className="mt-4 block">
        <Input
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorUser(false);
          }}
          label="Senha: "
          value={password}
          inputPros={{
            name: "password",
            type: "password",
            placeholder: "Digite sua senha",
            className: errorUser ? "border-red-500" : "",
          }}
        />
        {errorUser && (
          <p className="text-red-500 text-sm mt-1">Email ou senha incorretos</p>
        )}
        <Link
          to="/"
          className="float-end mb-4 mt-2 text-neutral-300 hover:text-neutral-400"
        >
          Esqueceu a senha ?
        </Link>
      </div>
      <div className="mt-4 block">
        <button
          className="bg-teal-600 text-gray-900 p-2 rounded-md hover:bg-teal-400 w-full"
          type="submit"
          disabled={isdisabled}
        >
          {loading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            "Entrar"
          )}
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
