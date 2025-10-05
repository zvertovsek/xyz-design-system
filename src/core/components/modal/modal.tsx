import Icons from "@icons";
import { showPortal } from "@utils";
import { useEffect, useState } from "react";
import FocusLock from "react-focus-lock";
import { useTheme } from "styled-components";
import Typography from "../typography";
import {
  ModalBodyWrapper,
  ModalBoxWrapper,
  ModalCloseButton,
  ModalFooterWrapper,
  ModalHeaderWrapper,
  ModalWrapper,
} from "./modal.styles";
import { ComponentProps, ModalViewModel } from "./modal.types";

export const ModalComponent: React.FC<ComponentProps<ModalViewModel>> = ({
  className,
  vm: { headerTitle, content, footer, isVisible, baseZIndex, onHide, type = "default", allowOverflow = false },
}) => {
  const [isPortalVisible, setPortalVisibility] = useState<boolean>(false);
  const theme = useTheme();

  useEffect(() => {
    if (isVisible && !isPortalVisible) {
      setPortalVisibility(true);
    } else if (!isVisible && isPortalVisible) {
      // support for closing animation modal
      setTimeout(() => {
        setPortalVisibility(false);
      }, 200);
    }
  }, [isVisible]);

  return (
    <>
      {isPortalVisible &&
        showPortal(
          <ModalWrapper
            baseZIndex={baseZIndex || theme.zIndices.modal}
            isVisible={isVisible}
            className={className}
            data-testid="modal-wrapper"
          >
            <FocusLock disabled={!isVisible} returnFocus>
              <ModalBoxWrapper isVisible={isVisible} type={type}>
                <ModalHeaderWrapper type={type}>
                  <Typography.H2 color={theme.colorPalettes.primary.default[50]} data-testid="title-modal">
                    {headerTitle}
                  </Typography.H2>
                  {onHide && (
                    <ModalCloseButton onClick={onHide} data-testid="modalComponent-closeButton">
                      <Icons.CloseIcon color={theme.colorPalettes.primary.default[50]} />
                    </ModalCloseButton>
                  )}
                </ModalHeaderWrapper>
                <ModalBodyWrapper type={type} allowOverflow={allowOverflow}>
                  {content}
                </ModalBodyWrapper>
                {footer && <ModalFooterWrapper>{footer}</ModalFooterWrapper>}
              </ModalBoxWrapper>
            </FocusLock>
          </ModalWrapper>,
        )}
    </>
  );
};

export default ModalComponent;
