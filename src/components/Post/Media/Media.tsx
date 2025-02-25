import styles from './Media.module.css';

interface Props {
  img?: string;
  isLocked: boolean;
}

const Media = ({ img, isLocked }: Props) => {
  return (
    <div className={`${styles.media} ${isLocked ? styles.mediaLocked : ''}`}>
      <img src={img} alt="post" className={styles.content} />
    </div>
  );
};

export default Media;
