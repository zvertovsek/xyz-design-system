import { useTheme } from "styled-components";
import { IconButton } from "@core/components/button";
import Layout from "../layout";
import { ArrowWrapper, CarouselWrapper, HeaderTitle, HeaderWrapper, ItemListWrapper } from "./carousel.styles";
import { CarouselProps } from "./carousel.types";
import Icons from "@icons";
import React, { useState } from "react";

export const Carousel: React.FC<CarouselProps> = ({ header, items, startPage = 0, numVisible }) => {
  const [page, setPage] = useState<number>(startPage);
  const { spacing } = useTheme();

  const goToNextPage = () => {
    if (page !== items.length - numVisible) {
      setPage((page) => page + 1);
    }
  };

  const goToPreviousPage = () => {
    if (page > 0) {
      setPage((page) => page - 1);
    }
  };

  return (
    <CarouselWrapper>
      <HeaderWrapper>
        <HeaderTitle data-testid="carousel-header">{header}</HeaderTitle>
        <Layout.FlexboxContainer gap={spacing[1]}>
          <ArrowWrapper direction="left">
            <IconButton
              icon={Icons.ChevronUpIcon}
              onClick={goToPreviousPage}
              isInactive={page === 0}
              testId="arrow-left-button"
            />
          </ArrowWrapper>
          <ArrowWrapper direction="right">
            <IconButton
              icon={Icons.ChevronUpIcon}
              onClick={goToNextPage}
              isInactive={page === items.length - numVisible}
              testId="arrow-right-button"
            />
          </ArrowWrapper>
        </Layout.FlexboxContainer>
      </HeaderWrapper>
      <ItemListWrapper numVisible={numVisible} translatePosition={page * 100} role="list">
        {items}
      </ItemListWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;
