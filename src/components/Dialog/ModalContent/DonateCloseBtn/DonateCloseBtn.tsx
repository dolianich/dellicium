import { X } from '@phosphor-icons/react';
import styles from './DonateCloseBtn.module.css';

interface Props {
  onClick?: () => void;
}

const DonateCloseBtn = ({ onClick }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <X size={20} weight="regular" />
    </button>
  );
};

export default DonateCloseBtn;
