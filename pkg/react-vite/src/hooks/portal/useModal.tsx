import { createPortal } from "react-dom";

import { usePortal } from "./usePortal";
import Modal, { type IModalProps } from "@/components/global/modal/Modal";

export const useModal = (props: IModalProps) => {
  const { isPortalOpen, openPortal, closePortal } = usePortal();

  const PortalModal = () => {
    return isPortalOpen
      ? createPortal(
          <Modal
            message={props.message}
            icon={props.icon}
            positive={{
              ...props.positive,
              onClick: () => {
                props.positive.onClick();
                closePortal();
              },
            }}
            negative={{
              ...props.negative,
              onClick: () => {
                closePortal();
                props.negative.onClick();
              },
            }}
          />,
          document.getElementById("portal") as HTMLDivElement
        )
      : null;
  };
  return { openPortal, PortalModal };
};
