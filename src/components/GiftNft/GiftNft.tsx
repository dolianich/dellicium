import styles from './GiftNft.module.css';
import NftAuthor from './NFTAuthor/NftAuthor';
import Description from './Description/Description';

interface Props {
  description?: string;
  points?: number;
  img?: string;
}

const GiftNft = ({ description, points, img }: Props) => {
  return (
    <div className={styles.container}>
      <img src={img} className={styles.content} />
      <div className={styles.info}>
        <NftAuthor points={points} />
        <Description description={description} />
      </div>
    </div>
  );
};

export default GiftNft;
