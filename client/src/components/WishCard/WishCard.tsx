import styles from './WishCard.module.css';
import Button from './Button/Button';

interface Props {
  img?: string;
  title: string;
  description?: string;
  price: number;
}

const WishCard = ({ img, title, description, price }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img src={img} alt="img" className={styles.img} />
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.bottom}>
          <h3 className={styles.price}>{price} SOL</h3>
          <div className={styles.btns}>
            <Button title="Fund Dream" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
