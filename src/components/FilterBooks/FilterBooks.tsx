import { useState } from "react";
import { Input } from "../Input/Input";
import { SelectComponent } from "../SelectComponent/SelectComponent";

export function FilterBooks() {
  const [selectValue, setSelectValue] = useState<string>("");
  const [selectInput, setSelectInput] = useState<string>("");

  const handleChangeSelect = (value: string) => {
    setSelectValue(value);
  };
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectInput(event.target.value);
  };
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-neutral-300">
        Filtrar Livros
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <Input
          type="text"
          value={selectInput}
          placeholder="Pesquisar por título ou autor..."
          onChange={handleChangeInput}
        />
        <SelectComponent value={selectValue} onChange={handleChangeSelect} />
        <button className="bg-teal-600 text-gray-900 p-2 rounded-md hover:bg-teal-400 w-full">
          Filtrar
        </button>
      </div>
    </section>
  );
}
