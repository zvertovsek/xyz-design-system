import { InputText } from "@core/components/inputText";
import { MetadataInputProps } from "./metadataInput.model";
import { useState } from "react";
import { MetadataInputWrapper } from "./metadataInput.styles";

export const MetadataInput: React.FC<MetadataInputProps> = ({
  placeholder,
  label,
  type,
  onChangeCallback,
  errorMessage,
  maxValue,
}) => {
  const [value, setValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);

  const onChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    setValue(newValue);
    onChangeCallback(newValue);
  };

  const getErrorMessage = (): string | undefined => {
    if (!isFocused && !value) {
      return errorMessage;
    }
    return undefined;
  };

  return (
    <MetadataInputWrapper>
      <InputText
        value={value}
        placeholder={placeholder}
        label={label}
        onChange={onChangeEventHandler}
        type={type}
        errorMessage={getErrorMessage()}
        maxValue={maxValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </MetadataInputWrapper>
  );
};

export default MetadataInput;
