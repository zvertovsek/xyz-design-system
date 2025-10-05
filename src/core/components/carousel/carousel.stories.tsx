import { Meta, StoryFn } from "@storybook/react";
import styled from "styled-components";

import Carousel from "./carousel";
import { CarouselProps } from "./carousel.types";

export default {
  title: "Components/Carousel",
  component: Carousel,
} as Meta;

const Container = styled.div`
  width: 600px;
`;

const ItemWrapper = styled.div`
  padding: 0.5rem;
`;

const Item = styled.div`
  text-align: center;
  border: solid black;
  background-color: lightgreen;
  height: 100px;
`;

export const Default: StoryFn<CarouselProps> = (props) => {
  return (
    <Container>
      <Carousel {...props} />
    </Container>
  );
};

Default.args = {
  header: "Title",
  items: [
    <ItemWrapper>
      <Item>Card1</Item>
    </ItemWrapper>,
    <ItemWrapper>
      <Item>Card2</Item>
    </ItemWrapper>,
    <ItemWrapper>
      <Item>Card3</Item>
    </ItemWrapper>,
    <ItemWrapper>
      <Item>Card4</Item>
    </ItemWrapper>,
    <ItemWrapper>
      <Item>Card5</Item>
    </ItemWrapper>,
    <ItemWrapper>
      <Item>Card6</Item>
    </ItemWrapper>,
  ],
  numVisible: 2,
};
Default.storyName = "Carousel";
