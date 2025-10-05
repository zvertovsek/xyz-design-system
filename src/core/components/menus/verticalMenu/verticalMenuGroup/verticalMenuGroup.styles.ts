import styled, { css } from "styled-components";

export const GroupWrapper = styled.div`
  padding: ${({ theme }) => theme.sizes[2]};
  padding-bottom: 0;
`;

export const TitleGroup = styled.div<{ isHidden: boolean }>`
  padding: ${({ theme }) => theme.sizes["1.5"]} ${({ theme }) => theme.sizes["3"]};
  transition: all 0.5s linear;

  ${({ isHidden }) =>
    isHidden &&
    css`
      visibility: hidden;
      opacity: 0;
    `}
`;

export const ItemListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes["1.5"]};
  list-style-type: none;
  margin-bottom: ${({ theme }) => theme.sizes["1.5"]};
`;
