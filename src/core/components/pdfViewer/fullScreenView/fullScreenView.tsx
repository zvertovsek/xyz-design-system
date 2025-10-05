import Icons, { IconSize } from "@icons";
import { Viewer } from "@react-pdf-viewer/core";
import FocusLock from "react-focus-lock";
import { useTheme } from "styled-components";
import { FullScreenButton, FullScreenWrapper, ViewerWrapper } from "./fullScreenView.styles";
import { FullScreenViewProps } from "./fullScreenView.types";

export const FullScreenView: React.FC<FullScreenViewProps> = ({ srcDocument, plugins, exitFullScreenMode }) => {
  const { colorPalettes } = useTheme();

  return (
    <FocusLock returnFocus>
      <FullScreenWrapper data-testid="fullScreenViewComponent">
        <FullScreenButton onClick={exitFullScreenMode} type="button">
          <Icons.FullScreenExitIcon color={colorPalettes.white} size={IconSize.md} />
        </FullScreenButton>

        <ViewerWrapper>
          <Viewer fileUrl={srcDocument} plugins={plugins} />
        </ViewerWrapper>
      </FullScreenWrapper>
    </FocusLock>
  );
};

export default FullScreenView;
