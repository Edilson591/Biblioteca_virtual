export interface inputProps {
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  inputPros: React.InputHTMLAttributes<HTMLInputElement>;
  label?: string;
}
