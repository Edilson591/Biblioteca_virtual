import { inputProps } from "./interfaceInput";

export function Input({ onChange, value, label, inputPros }: inputProps) {
  const defaultClass = "p-4 bg-gray-800 border border-gray-600 rounded-md w-full text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-950"

  const finalClass = `${defaultClass} ${inputPros?.className || "border-gray-600"}`;
  return (
    <>
      {label && (
        <label
          htmlFor={inputPros?.id}
          className="text-neutral-300 font-bold mb-2 block"
        >
          {label}
        </label>
      )}
      <input 
      {...inputPros}
      onChange={onChange} 
      value={value}
      className={finalClass}
      />
    </>
  );
}
