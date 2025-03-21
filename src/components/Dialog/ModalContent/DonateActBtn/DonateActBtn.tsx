import styles from './DonateActBtn.module.css';
import { CaretRight, Coins, Gift, ClipboardText } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

interface Props {
  type?: 'tips' | 'gift' | 'wishlist';
  text: string;
  onClick?: () => void;
  link?: boolean;
  wishlistLink?: string;
}

const DonateActBtn = ({ text, type, onClick, link, wishlistLink }: Props) => {
  return (
    <>
      {link ? (
        <Link to={wishlistLink!} className={styles.btn}>
          <div className={styles.left}>
            <div className={styles.iconContainer}>
              <ClipboardText weight="fill" size={20} color="#BBF2FC" />
            </div>
            <h4 className={styles.title}>{text}</h4>
          </div>
          <CaretRight size={20} weight="regular" className={styles.arrow} />
        </Link>
      ) : (
        <button className={styles.btn} onClick={onClick}>
          <div className={styles.left}>
            <div className={styles.iconContainer}>
              {type === 'tips' ? (
                <Coins weight="fill" size={20} color="#FCF9BB" />
              ) : type === 'gift' ? (
                <Gift weight="fill" size={20} color="#E6BBFC" />
              ) : (
                ''
              )}
            </div>
            <h4 className={styles.title}>{text}</h4>
          </div>
          <CaretRight size={20} weight="regular" className={styles.arrow} />
        </button>
      )}
    </>
  );
};

export default DonateActBtn;
