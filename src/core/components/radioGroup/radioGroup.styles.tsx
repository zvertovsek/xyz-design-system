import styled from "styled-components";
import { RadioElement } from "./components/radio/radio.styles";

export const RadioGroupElement = styled.div`
  display: flex;
  flex-direction: column;

  ${RadioElement} {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
