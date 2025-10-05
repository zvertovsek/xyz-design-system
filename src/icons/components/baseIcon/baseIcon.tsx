import { BaseIconProps, IconSize } from "../../icon.types";

const BaseIcon: React.FC<BaseIconProps> = ({ size, viewBox, graphic, testId }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox || `0 0 ${IconSize.lg} ${IconSize.lg}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      data-testid={testId}
    >
      {graphic}
    </svg>
  );
};

export default BaseIcon;
