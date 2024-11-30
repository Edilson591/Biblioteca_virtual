export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  id?: string;
}
