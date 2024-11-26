import { SelectProps } from "./interfaceSelect";

export function SelectComponent({ onChange, value }: SelectProps) {
  const options = [
    { value: "", label: "Selecionar Categoria" },
    { value: "autoajuda", label: "autoajuda" },
    { value: "universitario", label: "universitario" },
    { value: "aventura", label: "Aventura" },
  ];

  return (
    <select
      value={value}
      onChange={onChange}
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
