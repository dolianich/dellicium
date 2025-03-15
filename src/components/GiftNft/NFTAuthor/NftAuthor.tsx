import styles from './NFTAuthor.module.css';
import logo from '../../../storage/gifts/logo.png';

const NftAuthor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={logo} className={styles.img} />
      </div>
      <div className={styles.points}>+10xp</div>
    </div>
  );
};

export default NftAuthor;
