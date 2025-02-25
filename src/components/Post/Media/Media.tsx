import styles from './Media.module.css';

interface Props {
  img?: string;
  isLocked: boolean;
  type?: string;
}

const Media = ({ img, isLocked, type }: Props) => {
  return (
    <div className={`${styles.media} ${isLocked ? styles.mediaLocked : ''}`}>
      <img
        src={img}
        alt="post"
        className={
          type === 'secondary' ? styles.contentSecondary : styles.content
        }
      />
    </div>
  );
};

export default Media;
