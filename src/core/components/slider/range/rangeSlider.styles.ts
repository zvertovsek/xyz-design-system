import styled from "styled-components";
import Typography from "../../typography";

export const RangeSliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  user-select: none;

  .rc-slider-rail,
  .rc-slider-track {
    border-radius: ${({ theme }) => theme.radii.sm};
    height: ${({ theme }) => theme.sizes[2]};
  }

  .rc-slider-rail {
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[200]};
  }

  .rc-slider-track {
    background-color: ${({ theme }) => theme.colorPalettes.primary.accent[600]};
  }

  .rc-slider-dot {
    bottom: auto;
    border: none;
    background-color: ${({ theme }) => theme.colorPalettes.primary.default[300]};

    &-active {
      background-color: ${({ theme }) => theme.colorPalettes.primary.accent[700]};
    }
  }

  .rc-slider-handle {
    background-color: ${({ theme }) => theme.colorPalettes.primary.accent[900]};
    height: ${({ theme }) => theme.sizes[4]};
    width: ${({ theme }) => theme.sizes[4]};
    border: none;
    opacity: 1;

    &-dragging,
    &:focus-visible {
      border: none;
      box-shadow: none !important;
      background-color: ${({ theme }) => theme.colorPalettes.primary.accent[200]};
    }
  }
`;

export const SliderLabel = styled(Typography.Caption)`
  color: ${({ theme }) => theme.colorPalettes.primary.accent[700]};
  margin-top: 2px;
`;
