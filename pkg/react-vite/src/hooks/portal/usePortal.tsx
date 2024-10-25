import { useState } from "react";

export const usePortal = () => {
  const [isPortalOpen, setIsPortal] = useState(false);

  const openPortal = () => {
    setIsPortal(true);
  };

  const closePortal = () => {
    setIsPortal(false);
  };

  return { isPortalOpen, openPortal, closePortal };
};
