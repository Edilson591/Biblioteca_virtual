
export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
    onChange: (value: string) => void; 
    value?: string;
}
