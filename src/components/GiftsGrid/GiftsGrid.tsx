import styles from './GiftsGrid.module.css';
import GiftNft from '../GiftNft/GiftNft';
import earth from '../../storage/gifts/earth.png';
import fire from '../../storage/gifts/fire.png';
import water from '../../storage/gifts/water.png';
import sun from '../../storage/gifts/sun.png';

const GiftsGrid = () => {
  const nfts = [
    {
      img: sun,
      description: 'The gift of light',
      points: 12,
    },
    {
      img: water,
      description: 'The gift of emotion',
      points: 80,
    },
    {
      img: fire,
      description: 'The gift of passion',
      points: 43,
    },
    {
      img: earth,
      description: 'The gift of stability',
      points: 14,
    },
  ];

  return (
    <div className={styles.giftsGrid}>
      {nfts.map((nft) => (
        <GiftNft
          description={nft.description}
          points={nft.points}
          img={nft.img}
        />
      ))}
    </div>
  );
};

export default GiftsGrid;
