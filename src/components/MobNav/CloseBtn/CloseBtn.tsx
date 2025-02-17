import styles from './CloseBtn.module.css';
import { X } from '@phosphor-icons/react';

interface Props {
  onClick: () => void;
}

const CloseBtn = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      <X size={20} weight="regular" />
    </button>
  );
};

export default CloseBtn;
