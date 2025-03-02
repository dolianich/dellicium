import styles from './ActionBtn.module.css';
import Lottie from 'lottie-react';
import wishlist from '../../../../assets/animations/game.json';
import custom from '../../../../assets/animations/custom.json';

interface Props {
  title: string;
  subtitle: string;
  type?: string;
}

const ActionBtn = ({ title, subtitle, type }: Props) => {
  return (
    <button className={styles.wrapper}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.animContainer}>
        <Lottie
          animationData={type === 'wishlist' ? wishlist : custom}
          className={styles.animation}
        />
      </div>
    </button>
  );
};

export default ActionBtn;
