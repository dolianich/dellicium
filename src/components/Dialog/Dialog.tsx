import { forwardRef } from 'react';
import styles from './Dialog.module.css';

interface Props {
  children?: React.ReactNode;
  toggleDialog: () => void;
}

const Dialog = forwardRef<HTMLDialogElement, Props>(
  ({ children, toggleDialog }, ref) => {
    const handleClickOutside = (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.currentTarget === e.target) {
        toggleDialog();
      }
    };

    const handleClickInside = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    };

    return (
      <dialog className={styles.dialog} ref={ref} onClick={handleClickOutside}>
        <div onClick={handleClickInside}>{children}</div>
      </dialog>
    );
  }
);

export default Dialog;
