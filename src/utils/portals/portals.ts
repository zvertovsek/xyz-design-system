import { createPortal } from "react-dom";

export const showPortal = (component: React.ReactNode): React.ReactPortal => {
  return createPortal(component, document.body);
};
