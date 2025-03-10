import { forwardRef } from 'react';
import styles from './Dialog.module.css';

interface Props {
  children?: React.ReactNode;
  toggleDialog: () => void;
  type?: 'primary' | 'secondary';
}

const Dialog = forwardRef<HTMLDialogElement, Props>(
  ({ children, toggleDialog, type }, ref) => {
    const handleClickOutside = (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.currentTarget === e.target) {
        toggleDialog();
      }
    };

    const handleClickInside = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    };

    return (
      <dialog
        className={
          type === 'primary' ? styles.dialogPrimary : styles.dialogSecondary
        }
        ref={ref}
        onClick={handleClickOutside}
      >
        <div className={styles.inside} onClick={handleClickInside}>
          {children}
        </div>
      </dialog>
    );
  }
);

export default Dialog;
