import { useCallback, useState } from 'react';

const useToggle = (defaultValue: boolean = false): {
  toggle: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
} => {
  const [toggle, setToggle] = useState<boolean>(defaultValue);

  const handleOpen = useCallback(() => {
    setToggle(true);
  }, [])

  const handleClose = useCallback(() => {
    setToggle(false);
  }, [])

  const handleToggle = useCallback(() => {
    setToggle(prev => !prev);
  }, [])

  return {
    toggle,
    onOpen: handleOpen,
    onClose: handleClose,
    onToggle: handleToggle,
  }
}

export default useToggle;
