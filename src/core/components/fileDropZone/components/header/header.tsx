import { HeaderWrapper, FileWrapper, TicIconWrapper } from "./header.styles";
import Typography from "@core/components/typography";
import { HeaderProps } from "./header.model";
import { FileNodeType } from "../../fileDropZone.model";
import Icons, { IconProps, IconSize } from "@icons";
import { useTheme } from "styled-components";

export const Header: React.FC<HeaderProps> = ({ file, isFileUploaded }) => {
  const theme = useTheme();

  const callIconProps: IconProps = {
    size: IconSize.lg,
    color: theme.colorPalettes.primary.accent[700],
  };

  return (
    <HeaderWrapper>
      <FileWrapper>
        {file.fileType == FileNodeType.Doc ? (
          <Icons.DocumentIcon {...callIconProps} />
        ) : (
          <Icons.AudioFileIcon {...callIconProps} />
        )}
        <Typography.B1>{file.fileName}</Typography.B1>
      </FileWrapper>
      {isFileUploaded && (
        <TicIconWrapper>
          <Icons.CheckIcon color={theme.colorPalettes.rag.success[300]} />
        </TicIconWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;
