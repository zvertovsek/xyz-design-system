import { IconSize } from "@icons";
import { CellWrapper, NameColumn } from "./cell.styles";
import { CellProps } from "./cell.types";

const Cell: React.FC<CellProps> = ({
  label,
  hasGap = false,
  color,
  backgroundColor,
  isHighlightable = false,
  justifyContent,
  onHover,
  onClick,
  icon: Icon,
  width,
  borderRadius,
}) => {
  const onClickHandler = label && onClick ? onClick : undefined;
  return (
    <CellWrapper
      hasGap={hasGap}
      backgroundColor={backgroundColor}
      isHighlightable={isHighlightable}
      justifyContent={justifyContent}
      isClickable={!!label && (!!onHover || !!onClick)}
      width={width}
      onMouseOver={onHover}
      onClick={onClickHandler}
      data-testid="heatmap-cell_container"
      borderRadius={borderRadius}
    >
      <NameColumn as="span" color={color} data-testid="heatmap-cell_text">
        {label || "no data"}
      </NameColumn>
      {Icon && <Icon size={IconSize.sm} color={color} />}
    </CellWrapper>
  );
};

export default Cell;
