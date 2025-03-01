import styles from './Media.module.css';

interface Props {
  img?: string;
  isLocked: boolean;
  type?: string;
  contentType?: 'image' | 'video';
}

const Media = ({ img, isLocked, type, contentType }: Props) => {
  return (
    <div className={`${styles.media} ${isLocked ? styles.mediaLocked : ''}`}>
      {contentType === 'image' ? (
        <img
          src={img}
          alt="post"
          className={
            type === 'secondary' ? styles.contentSecondary : styles.content
          }
        />
      ) : contentType === 'video' ? (
        <video />
      ) : (
        ''
      )}
    </div>
  );
};

export default Media;
