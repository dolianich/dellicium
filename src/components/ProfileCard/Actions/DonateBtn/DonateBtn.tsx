import styles from './DonateBtn.module.css';
import { CaretRight } from '@phosphor-icons/react';
import Lottie from 'lottie-react';
import tip from '../../../../assets/animations/tip_anim.json';
import gift from '../../../../assets/animations/gift.json';

interface Props {
  type: string;
  onClick: () => void;
  variant?: string;
}

const DonateBtn = ({ type, onClick, variant }: Props) => {
  return (
    <button
      onClick={onClick}
      className={type === 'tips' ? styles.tips : styles.gift}
    >
      <div
        className={
          variant === 'secondary'
            ? styles.animContainerSecondary
            : styles.animContainer
        }
      >
        <Lottie
          animationData={type === 'tips' ? tip : gift}
          className={styles.animation}
        />
      </div>

      <div className={styles.arrow}>
        <h3
          className={
            variant === 'secondary' ? styles.textSecondary : styles.text
          }
        >
          {type === 'tips' ? 'Send Tips' : 'NFT Gift'}
        </h3>
        <CaretRight size={20} />
      </div>
    </button>
  );
};

export default DonateBtn;
