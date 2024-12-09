import { inputProps } from "./interfaceInput";

export function Input({ onChange, value, label, inputPros }: inputProps) {
  const inputConfig = {
    onChange,
    value,
    className:
    "p-2 bg-gray-800 border border-gray-600 rounded-md w-full text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-950",
    label,
    ...inputPros,
  };
  return (
    <>
      {label && (
        <label
          htmlFor={inputPros?.id}
          className="text-neutral-300 font-bold mb-1 block"
        >
          {label}
        </label>
      )}
      <input {...inputConfig} />
    </>
  );
}
