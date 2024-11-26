export interface InputPros {
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  id?: string;
}
