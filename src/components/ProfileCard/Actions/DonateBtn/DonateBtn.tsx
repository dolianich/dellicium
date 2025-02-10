import styles from './DonateBtn.module.css';
import { Coins, CaretRight, Gift } from '@phosphor-icons/react';

interface Props {
  type: string;
}

const DonateBtn = ({ type }: Props) => {
  return (
    <button className={type === 'tips' ? styles.tips : styles.gift}>
      <div className={styles.iconContainer}>
        {type === 'tips' ? (
          <Coins size={20} weight="regular" />
        ) : (
          <Gift size={20} weight="regular" />
        )}
      </div>

      <div className={styles.arrow}>
        <h3 className={styles.text}>
          {type === 'tips' ? 'Send Tips' : 'NFT Gift'}
        </h3>
        <CaretRight size={20} />
      </div>
    </button>
  );
};

export default DonateBtn;
