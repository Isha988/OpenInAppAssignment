import { useState } from "react";

export const usestate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  return [isOpen, onClose, onOpen];
};
