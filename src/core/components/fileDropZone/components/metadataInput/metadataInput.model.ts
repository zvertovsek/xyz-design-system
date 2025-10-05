export interface MetadataInputProps {
  label?: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChangeCallback: (value: string) => void;
  errorMessage?: string;
  maxValue?: number | string;
}
