import { IconButton } from "@core/components/button";
import { FlexboxContainer } from "@core/components/layout";
import Typography from "@core/components/typography";
import { TrashIcon } from "@icons";
import { FileHeaderProps } from "./fileHeader.types";

export const FileHeader: React.FC<FileHeaderProps> = ({ file, onDelete }) => {
  return (
    <FlexboxContainer justifyContent="space-between">
      <Typography.B2>{file.name}</Typography.B2>
      <IconButton icon={TrashIcon} isOnWhiteBackground onClick={() => onDelete(file)} />
    </FlexboxContainer>
  );
};
