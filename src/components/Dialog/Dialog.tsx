import { forwardRef } from 'react';

interface Props {
  children?: React.ReactNode;
  toggleDialog: () => void;
}

const Dialog = forwardRef<HTMLDialogElement, Props>(
  ({ children, toggleDialog }, ref) => {
    return (
      <dialog
        ref={ref}
        onClick={(e) => (e.currentTarget === e.target ? toggleDialog() : '')}
      >
        {children}
      </dialog>
    );
  }
);

export default Dialog;
