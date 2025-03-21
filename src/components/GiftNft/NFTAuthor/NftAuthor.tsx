import styles from './NFTAuthor.module.css';
import logo from '../../../storage/gifts/logo.png';

interface Props {
  points?: number;
  title: string;
}

const NftAuthor = ({ points, title }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.topLeft}>
        <div className={styles.wrapper}>
          <img src={logo} className={styles.img} />
        </div>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.points}>+{points}xp</div>
    </div>
  );
};

export default NftAuthor;
