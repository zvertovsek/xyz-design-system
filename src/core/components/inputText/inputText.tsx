import { ContainerWrapper, ErrorMessage, InputElement, Label, ErrorMessageWrapper } from "./inputText.styles";
import { InputTextProps } from "./inputText.types";

export const InputText: React.FC<InputTextProps> = ({
  id,
  value,
  onChange,
  placeholder,
  label,
  isDisabled = false,
  type = "text",
  isReadOnly = false,
  errorMessage,
  maxValue,
  onFocus,
  onBlur,
}) => {
  return (
    <ContainerWrapper isValueEmpty={!value}>
      <InputElement
        id={id}
        value={value}
        onChange={onChange}
        placeholder={!label ? placeholder : undefined}
        disabled={isDisabled}
        type={type}
        readOnly={isReadOnly}
        isError={!!errorMessage}
        max={maxValue}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {label && (
        <Label htmlFor={id} data-testid="label" isError={!!errorMessage}>
          {label}
        </Label>
      )}
      {errorMessage && (
        <ErrorMessageWrapper>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorMessageWrapper>
      )}
    </ContainerWrapper>
  );
};

export default InputText;
