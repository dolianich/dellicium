import styles from './Media.module.css';

interface Props {
  src?: string;
  isLocked: boolean;
  type?: string;
  contentType: 'image' | 'video';
}

const Media = ({ src, isLocked, type, contentType }: Props) => {
  return (
    <div className={`${styles.media} ${isLocked ? styles.mediaLocked : ''}`}>
      {contentType === 'image' ? (
        <img
          src={src}
          alt="post"
          className={
            type === 'secondary' ? styles.contentSecondary : styles.content
          }
        />
      ) : contentType === 'video' ? (
        <video
          src={src}
          controls
          className={
            type === 'secondary' ? styles.contentSecondary : styles.content
          }
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Media;
