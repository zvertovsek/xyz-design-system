import Typography from "@core/components/typography";
import styled from "styled-components";

export const DescriptionWrapper = styled(Typography.B2)`
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[100]};
`;
