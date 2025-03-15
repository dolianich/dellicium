import styles from './GiftNft.module.css';
import earth from '../../storage/gifts/earth.png';
import NftAuthor from './NFTAuthor/NftAuthor';
import Description from './Description/Description';

const GiftNft = () => {
  return (
    <div className={styles.container}>
      <img src={earth} className={styles.content} />
      <div className={styles.info}>
        <NftAuthor />
        <Description />
      </div>
    </div>
  );
};

export default GiftNft;
