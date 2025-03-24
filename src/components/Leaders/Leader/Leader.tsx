import styles from './Leader.module.css';
import { CaretUp, CaretDown } from '@phosphor-icons/react';

interface Props {
  name?: string;
  avatar?: string;
  points?: number;
  place?: number;
  position?: string;
}

const Leader = ({ name, avatar, points, place, position }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.imgWrapper}>
          <img src={avatar} alt="img" className={styles.img} />
        </div>
        <h3 className={styles.name}>{name}</h3>
      </div>
      <div className={styles.right}>
        <div className={styles.data}>
          <p className={styles.place}>{place}</p>
          <h4 className={styles.xp}>{points}xp</h4>
        </div>
        <div className={styles.indicator}>
          {position === 'up' ? (
            <CaretUp size={20} color="#BBFCDC" weight="fill" />
          ) : position === 'down' ? (
            <CaretDown size={20} color="#FF6F61" weight="fill" />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Leader;
