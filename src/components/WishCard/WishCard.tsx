import styles from './WishCard.module.css';
import feeder from '../../storage/wishes/feeder.png';
import Button from './Button/Button';

const WishCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img src={feeder} alt="img" className={styles.img} />
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <h4 className={styles.title}>Wish name</h4>
          <p className={styles.description}>Wish description</p>
        </div>
        <div className={styles.bottom}>
          <h3 className={styles.price}>100 SOL</h3>
          <div className={styles.btns}>
            <Button title='Fund Dream'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
