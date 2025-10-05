import styled from "styled-components";

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};

  .tag-score {
    margin-top: auto;
  }
`;

export const ScoreCategory = styled.span<{ boldGrade?: number }>`
  font-weight: ${({ boldGrade }) => boldGrade};
  color: ${({ theme }) => theme.colorPalettes.primary.accent[700]};
  text-transform: uppercase;
`;
