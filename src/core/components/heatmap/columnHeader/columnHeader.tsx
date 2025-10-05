import Icons, { IconSize } from "@icons";
import { ColumnWrapper, IconArrowContainer, NameColumn } from "./columnHeader.styles";
import { ColumnHeaderProps } from "./columnHeader.types";

const ColumnHeader: React.FC<ColumnHeaderProps> = ({
  field,
  name,
  hasGap = false,
  isSortable = false,
  sortDirection,
  isDefault = false,
  onClick,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      onClick(field);
    }
  };

  return (
    <ColumnWrapper
      hasGap={hasGap}
      isSortable={isSortable}
      onClick={() => onClick(field)}
      tabIndex={isSortable ? 0 : -1}
      onKeyDown={handleKeyDown}
      data-testid="heatmap-column__header__container"
    >
      <NameColumn as="span" isHighlighted={!!sortDirection} isDefault={isDefault} data-testid="heatmap-column_text">
        {name}
      </NameColumn>
      {isSortable && sortDirection && (
        <IconArrowContainer direction={sortDirection} isDefault={isDefault}>
          <Icons.ChevronUpIcon size={IconSize.sm} />
        </IconArrowContainer>
      )}
    </ColumnWrapper>
  );
};

export default ColumnHeader;
