import styles from './NFTAuthor.module.css';
import logo from '../../../storage/gifts/logo.png';

interface Props {
  points?: number;
}

const NftAuthor = ({ points }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={logo} className={styles.img} />
      </div>
      <div className={styles.points}>+{points}xp</div>
    </div>
  );
};

export default NftAuthor;
