import styled from "styled-components";

export const CustomInputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 5px;
    left: 9px;

    path {
      fill: ${({ theme }) => theme.colorPalettes.primary.default[900]};
    }
  }
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colorPalettes.primary.default[100]};
  border-radius: ${({ theme }) => theme.radii.sm};
  text-align: center;
  padding: ${({ theme }) => theme.spacing[1]} 0 ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2.5]};
  width: 100%;
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  font-weight: 300;

  ::placeholder {
    font-weight: 300;
    color: ${({ theme }) => theme.colorPalettes.primary.default[500]};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const ContainerPicker = styled.div`
  width: ${({ theme }) => theme.spacing[60]};

  & > div {
    width: 100%;
  }
`;
