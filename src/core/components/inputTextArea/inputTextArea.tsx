import { useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import { VerticalSpacer } from "../spacer";
import { CharacterLimitLabel, ContainerWrapper, ErrorLabel, InputElementTextArea, Label } from "./inputTextArea.styles";
import { InputTextAreaProps, Severity } from "./inputTextArea.types";

export const InputTextArea: React.FC<InputTextAreaProps> = ({
  id,
  value,
  onChange,
  placeholder,
  label,
  isDisabled = false,
  isResizable = false,
  rows,
  cols,
  isRequired = false,
  isInvalid = false,
  maxLength,
  minLength,
  errorLabel,
  severity = Severity.Dark,
}) => {
  const theme = useTheme();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textAreaElement = textAreaRef.current;
    if (textAreaElement) {
      textAreaElement.style.minHeight = "auto";
      textAreaRef.current.style.minHeight = textAreaElement.scrollHeight + "px";
    }
  }, [textAreaRef.current, value]);

  return (
    <ContainerWrapper isValueEmpty={!value}>
      {!isDisabled && maxLength && (
        <CharacterLimitLabel data-testid="characterLabel" isInvalid={value.length >= maxLength}>
          {maxLength - value.length + " characters left"}
        </CharacterLimitLabel>
      )}
      {label && (
        <Label htmlFor={id} data-testid="label">
          {label}
        </Label>
      )}
      <InputElementTextArea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        isResizable={isResizable}
        rows={rows}
        cols={cols}
        required={isRequired}
        maxLength={maxLength}
        minLength={minLength}
        isInvalid={isInvalid}
        severity={severity}
        ref={textAreaRef}
      />
      <VerticalSpacer size={theme.spacing[0.5]} />
      {isInvalid && errorLabel && <ErrorLabel data-testid="errorLabel">{errorLabel}</ErrorLabel>}
    </ContainerWrapper>
  );
};

export default InputTextArea;
