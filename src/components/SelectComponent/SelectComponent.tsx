import { SelectProps } from "./interfaceSelect";

export function SelectComponent({ onChange, value }: SelectProps) {
  const options = [
    { value: "", label: "Selecionar Categoria" },
    { value: "ficcao", label: "Ficção" },
    { value: "romance", label: "Romance" },
    { value: "aventura", label: "Aventura" },
  ];
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };
  return (
    <select
      value={value}
      onChange={handleChange}
      className="p-2 bg-gray-800 border border-gray-600 rounded-md w-full text-neutral-300"
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value} className="text-neutral-300">
          {label}
        </option>
      ))}
    </select>
  );
}
