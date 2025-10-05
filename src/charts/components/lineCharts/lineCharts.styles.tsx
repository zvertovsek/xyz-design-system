import styled from "styled-components";

export const ChartWrapper = styled.div`
  position: relative;
  width: 100%;

  g.axis-y {
    .domain {
      display: none;
    }
  }

  g.overlay-wrapper > rect {
    fill: ${({ theme }) => theme.colorPalettes.primary.accent[200]};
    cursor: pointer;
    opacity: 0;

    &:hover {
      opacity: 0.2;
    }
  }
`;

export const NoDataText = styled.div`
  position: absolute;
  top: calc(50% - 30px);
  left: 50%;
  transform: translate(-50%, -50%);
  height: 28px;
  width: 107px;
  text-align: center;
  border-radius: 4px;
  padding: 0.4rem;
  background-color: ${({ theme }) => theme.colorPalettes.primary.default[200]};
  color: ${({ theme }) => theme.colorPalettes.primary.default[600]};
  font-size: 10px;
`;
