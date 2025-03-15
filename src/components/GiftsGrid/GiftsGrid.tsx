import styles from './GiftsGrid.module.css';
import GiftNft from '../GiftNft/GiftNft';

const GiftsGrid = () => {
  return (
    <div className={styles.giftsGrid}>
      <GiftNft />
      <GiftNft />
      <GiftNft />
      <GiftNft />
    </div>
  );
};

export default GiftsGrid;
