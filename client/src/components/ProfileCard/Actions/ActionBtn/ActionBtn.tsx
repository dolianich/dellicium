import styles from './ActionBtn.module.css';
import Lottie from 'lottie-react';
import wishlist from '../../../../assets/animations/game.json';
import custom from '../../../../assets/animations/custom.json';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  subtitle: string;
  type?: string;
  link?: string;
}

const ActionBtn = ({ title, subtitle, type, link }: Props) => {
  return (
    <Link to={link!} className={styles.wrapper}>
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
    </Link>
  );
};

export default ActionBtn;
