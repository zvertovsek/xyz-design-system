import Icons, { IconProps, IconSize } from "@icons";
import { SelectionMode } from "@react-pdf-viewer/selection-mode";
import { ToolbarSlot } from "@react-pdf-viewer/toolbar";
import { useState } from "react";
import { useTheme } from "styled-components";
import { ToolbarButton, ToolbarWrapper } from "./toolbar.styles";
import { ToolbarProps } from "./toolbar.types";

export const ToolbarComponent: React.FC<ToolbarProps> = ({ plugin, setFullScreenMode: onChangeFullScreenMode }) => {
  const { colorPalettes } = useTheme();
  const [selectionMode, setSelectionMode] = useState<SelectionMode>(SelectionMode.Text);
  const { Toolbar } = plugin;
  const iconProps: IconProps = {
    color: colorPalettes.primary.accent[800],
    size: IconSize.md,
  };

  return (
    <ToolbarWrapper data-testid="toolbarComponent">
      <Toolbar>
        {(props: ToolbarSlot) => {
          const { ZoomOut, SwitchSelectionMode, ZoomIn } = props;
          const mode = selectionMode === SelectionMode.Hand ? SelectionMode.Text : SelectionMode.Hand;

          return (
            <>
              <SwitchSelectionMode mode={mode}>
                {(props) => (
                  <ToolbarButton
                    onClick={() => {
                      props.onClick();
                      setSelectionMode(mode);
                    }}
                  >
                    {selectionMode === SelectionMode.Hand ? (
                      <Icons.ArrowSelectorIcon {...iconProps} />
                    ) : (
                      <Icons.PanToolIcon {...iconProps} />
                    )}
                  </ToolbarButton>
                )}
              </SwitchSelectionMode>

              <ZoomIn>
                {(props) => (
                  <ToolbarButton onClick={props.onClick}>
                    <Icons.ZoomInIcon {...iconProps} />
                  </ToolbarButton>
                )}
              </ZoomIn>

              <ZoomOut>
                {(props) => (
                  <ToolbarButton onClick={props.onClick}>
                    <Icons.ZoomOutIcon {...iconProps} />
                  </ToolbarButton>
                )}
              </ZoomOut>

              <ToolbarButton onClick={onChangeFullScreenMode}>
                <Icons.FullScreenIcon {...iconProps} />
              </ToolbarButton>
            </>
          );
        }}
      </Toolbar>
    </ToolbarWrapper>
  );
};

export default ToolbarComponent;
