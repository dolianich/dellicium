import styles from './DonateBtn.module.css';
import { HandCoins } from '@phosphor-icons/react';

interface Props {
  donate?: () => void;
}

const DonateBtn = ({ donate }: Props) => {
  return (
    <button className={styles.btn} onClick={donate}>
      <HandCoins size={20} weight="fill" />
    </button>
  );
};

export default DonateBtn;
