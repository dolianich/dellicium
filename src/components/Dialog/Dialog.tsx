import { forwardRef } from 'react';
import styles from './Dialog.module.css';

interface Props {
  children?: React.ReactNode;
  toggleDialog: () => void;
}

const Dialog = forwardRef<HTMLDialogElement, Props>(
  ({ children, toggleDialog }, ref) => {
    return (
      <dialog
        className={styles.dialog}
        ref={ref}
        onClick={(e) => (e.currentTarget === e.target ? toggleDialog() : '')}
      >
        {children}
      </dialog>
    );
  }
);

export default Dialog;
