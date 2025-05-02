import styles from './GiftNft.module.css';
import NftAuthor from './NFTAuthor/NftAuthor';
import Description from './Description/Description';

interface Props {
  description?: string;
  points?: number;
  img?: string;
  title: string;
}

const GiftNft = ({ description, points, img, title }: Props) => {
  return (
    <div className={styles.container}>
      <img src={img} className={styles.content} />
      <div className={styles.info}>
        <NftAuthor points={points} title={title}/>
        <Description description={description} />
      </div>
    </div>
  );
};

export default GiftNft;
