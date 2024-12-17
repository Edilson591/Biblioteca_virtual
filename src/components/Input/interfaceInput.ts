export interface inputProps {
  value: string | undefined;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  inputPros: React.InputHTMLAttributes<HTMLInputElement>;
}

