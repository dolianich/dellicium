import styles from './ActionBtnSm.module.css';
import {
  CaretRight,
  Strategy,
  TreasureChest,
  Info,
} from '@phosphor-icons/react';

interface Props {
  type: string;
}

const ActionBtnSm = ({ type }: Props) => {
  return (
    <button className={styles.btn}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          {type === 'Challenges' ? (
            <Strategy size={20} weight="regular" />
          ) : type === 'Rewards' ? (
            <TreasureChest size={20} weight="regular" />
          ) : (
            <Info size={20} weight="regular" />
          )}
        </div>
        <p className={styles.title}>{type}</p>
      </div>
      <CaretRight size={20} weight="regular" className={styles.arrow} />
    </button>
  );
};

export default ActionBtnSm;
