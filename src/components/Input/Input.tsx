import { InputPros } from "./interfaceInput";

export function Input({ onChange, placeholder, type, value,id }: InputPros) {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      className="p-2 bg-gray-800 border border-gray-600 rounded-md w-full text-neutral-300"
      placeholder={placeholder}
      id={id}
    />
  );
}
