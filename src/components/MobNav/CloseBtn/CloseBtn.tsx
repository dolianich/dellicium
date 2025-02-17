import styles from './CloseBtn.module.css';
import { X, List } from '@phosphor-icons/react';

interface Props {
  onClick: () => void;
  state: boolean;
}

const CloseBtn = ({ onClick, state }: Props) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {state ? <X size={20} weight="regular" /> : <List size={20} weight='regular'/>}
    </button>
  );
};

export default CloseBtn;
