import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import CustomModal, { type IModalProps } from "@/components/global/modal/Modal";

export const useModal = (props: IModalProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  const PortalModal = () => {
    return opened ? (
      // createPortal(
      <Modal opened={opened} onClose={close} title={props.title}>
        <CustomModal
          title={props.title}
          message={props.message}
          icon={props.icon}
          positive={{
            ...props.positive,
            onClick: () => {
              props.positive.onClick();
              close();
            },
          }}
          negative={{
            ...props.negative,
            onClick: () => {
              close();
              props.negative.onClick();
            },
          }}
        />
        ,
      </Modal>
    ) : //   document.getElementById("portal") as HTMLDivElement
    // )
    null;
  };
  return { open, PortalModal };
};
