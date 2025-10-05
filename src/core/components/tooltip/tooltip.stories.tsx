import { Meta, StoryFn } from "@storybook/react";
import { FC } from "react";
import styled, { css } from "styled-components";

import { DefaultThemeProvider } from "@theme";
import { TooltipProvider, useTooltip } from "..";

export default {
  title: "Components/Tooltip",
} as Meta;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const baseExampleStyles = css`
  display: block;
  user-select: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colorPalettes.white};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3.5]};
  background-color: ${({ theme }) => theme.colorPalettes.primary.ai[700]};
`;
const LeftExample = styled.div`
  ${baseExampleStyles}
  align-self: flex-start;
`;
const CenterExample = styled.div`
  ${baseExampleStyles}
  align-self: center;
`;
const RightExample = styled.div`
  ${baseExampleStyles}
  align-self: flex-end;
`;

const App: FC = () => (
  <DefaultThemeProvider>
    <TooltipProvider>
      <Example />
    </TooltipProvider>
  </DefaultThemeProvider>
);

const Example: FC = () => {
  const { showTooltip } = useTooltip();
  return (
    <Container>
      <Row>
        <LeftExample onMouseOver={showTooltip("A helpful message long enough")}>Bottom Left</LeftExample>
        <CenterExample onMouseOver={showTooltip("A helpful message long enough")}>Bottom Center</CenterExample>
        <RightExample onMouseOver={showTooltip("A helpful message long enough")}>Bottom Right</RightExample>
      </Row>

      <Row style={{ marginTop: "auto" }}>
        <LeftExample onMouseOver={showTooltip("A helpful message long enough")}>Top Left</LeftExample>
        <CenterExample onMouseEnter={showTooltip("A helpful message long enough")}>Top Center</CenterExample>
        <RightExample onMouseOver={showTooltip("A helpful message long enough")}>Top Right</RightExample>
      </Row>
    </Container>
  );
};

export const Default: StoryFn = () => <App />;

Default.storyName = "Tooltip";
