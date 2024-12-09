import { useState } from "react";
import { Input } from "../Input/Input";
import { SelectComponent } from "../SelectComponent/SelectComponent";
import Title from "../TitleComponent/Title";

interface propsForm {
  pesquisa: (input: string, select: string) => void;
}

export default function FormBooks({ pesquisa }: propsForm) {
  const [selectValue, setSelectValue] = useState<string>("");
  const [selectInput, setSelectInput] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    pesquisa(selectInput.toLocaleLowerCase(), selectValue.toLocaleLowerCase());
  };
  return (
    <>
      <Title children={"Filtrar Livros"} />
      <form
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4"
        onSubmit={onSubmit}
      >
        <Input
          onChange={(e) => setSelectInput(e.target.value)}
          value={selectInput}
          inputPros={{
            type: "text",
            placeholder: "Pesquisar por título ou autor...",
          }}
        />
        <SelectComponent
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        />
        <button
          className="bg-teal-600 text-gray-900 p-2 rounded-md hover:bg-teal-400 w-full"
          type="submit"
        >
          Filtrar
        </button>
      </form>
    </>
  );
}
