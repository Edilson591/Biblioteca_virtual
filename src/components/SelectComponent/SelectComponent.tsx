import { SelectProps } from "./interfaceSelect";

export function SelectComponent({
  onChange,
  value,
  id,
  label,
  name,
}: SelectProps) {
  const options = [
    { value: "", label: "Selecionar Categoria" },
    { value: "autoajuda", label: "Autoajuda" },
    { value: "universitario", label: "Universitário" },
    { value: "nao-informado", label: "Prefiro não informar" },
  ];

  return (
    <>
      {label && (
        <label htmlFor={id} className="text-neutral-300 font-bold mb-1 block">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className="p-4 bg-gray-800 border border-gray-600 rounded-md w-full  text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-950"
        id={id}
        name={name}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value} className="text-neutral-300">
            {label}
          </option>
        ))}
      </select>
    </>
  );
}
