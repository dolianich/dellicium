import styles from './Leader.module.css';
import photo from '../../../storage/bellavibes.jpg';
import { CaretUp } from '@phosphor-icons/react';

const Leader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.imgWrapper}>
          <img src={photo} alt="img" className={styles.img} />
        </div>
        <h3 className={styles.name}>Name</h3>
      </div>
      <div className={styles.right}>
        <div className={styles.data}>
          <p className={styles.place}>1st</p>
          <h4 className={styles.xp}>100xp</h4>
        </div>
        <div className={styles.indicator}>
          <CaretUp size={20} color="#BBFCDC" weight="fill" />
        </div>
      </div>
    </div>
  );
};

export default Leader;
