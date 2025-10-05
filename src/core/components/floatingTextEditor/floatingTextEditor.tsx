import { TextEditor } from "@core/components/textEditor";
import Icons, { IconSize } from "@icons";
import { showPortal } from "@utils";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { CollapseButton, FloatingTextEditorWrapper, Header, Label } from "./floatingTextEditor.styles";
import { BoxPosition, CoordinatesRef, FloatingTextEditorProps } from "./floatingTextEditor.types";

export const FloatingTextEditor: React.FC<FloatingTextEditorProps> = ({
  value,
  onChangeHandler,
  onHide,
  placeholder,
  description,
  isVisible,
  isEditable = true,
  initialBoxPosition = { left: 288, top: 495 },
}) => {
  const theme = useTheme();
  const [isPortalVisible, setIsPortalVisible] = useState<boolean>(false);
  const [boxPosition, setBoxPosition] = useState<BoxPosition>(initialBoxPosition);
  const draggingCoordinates = useRef<CoordinatesRef>({
    diffX: 0,
    diffY: 0,
  });

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const boxRect = e.currentTarget.getBoundingClientRect();
    draggingCoordinates.current.diffX = e.screenX - boxRect.left;
    draggingCoordinates.current.diffY = e.screenY - boxRect.top;

    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e: MouseEvent) => {
    const left = e.screenX - draggingCoordinates.current.diffX;
    const top = e.screenY - draggingCoordinates.current.diffY;

    setBoxPosition({ left, top });
  };

  const onMouseUp = () => {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  };

  useEffect(() => {
    if (isVisible && !isPortalVisible) {
      setIsPortalVisible(true);
    } else if (!isVisible && isPortalVisible) {
      setTimeout(() => {
        setIsPortalVisible(false);
      }, 200);
    }
  }, [isVisible, isPortalVisible]);

  if (!isPortalVisible) {
    return null;
  }

  return (
    isPortalVisible &&
    showPortal(
      <FloatingTextEditorWrapper isVisible={isVisible} type="default" style={boxPosition}>
        <Header onMouseDown={onMouseDown}>
          <Label>{description}</Label>
          <CollapseButton onClick={onHide} onMouseDown={(e) => e.stopPropagation()}>
            <Icons.CollapseIcon size={IconSize.sm} color={theme.colorPalettes.primary.accent[800]} />
          </CollapseButton>
        </Header>
        <TextEditor value={value} onChange={onChangeHandler} placeholder={placeholder} isEditable={isEditable} />
      </FloatingTextEditorWrapper>,
    )
  );
};
export default FloatingTextEditor;
