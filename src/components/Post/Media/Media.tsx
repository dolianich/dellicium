import styles from './Media.module.css';
import ReactPlayer from 'react-player';

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
        <ReactPlayer url={src} controls={true} width={'100%'} height={'auto'} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Media;
