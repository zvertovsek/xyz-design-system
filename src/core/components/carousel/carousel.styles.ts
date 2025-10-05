import styled from "styled-components";
import Layout from "@core/components/layout";
import Typography from "@core/components/typography";
import { ellipsis } from "@utils";

export const CarouselWrapper = styled.div`
  width: 100%;
`;

export const HeaderWrapper = styled(Layout.FlexboxContainer)`
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[1]} 0;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const ArrowWrapper = styled.div<{ direction: "left" | "right" }>`
  svg {
    transform: rotate(${({ direction }) => (direction === "left" ? "-90" : "90")}deg);
  }
`;

export const HeaderTitle = styled(Typography.H3)`
  color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
  ${ellipsis};
`;

export const ItemListWrapper = styled(Layout.FlexboxContainer)<{ numVisible: number; translatePosition: number }>`
  overflow-x: hidden;

  & > * {
    flex: 0 0 calc((100% / ${({ numVisible }) => numVisible}));
    transform: translateX(-${({ translatePosition }) => translatePosition}%);
    transition: transform 0.2s;
  }
`;
