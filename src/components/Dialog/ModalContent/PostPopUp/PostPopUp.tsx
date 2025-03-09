import styles from './PostPopUp.module.css';
import Media from '../../../Post/Media/Media';
import PostLock from '../../../Post/PostLock/PostLock';

interface Props {
  src?: string;
  isLocked: boolean;
  contentType: 'image' | 'video';
  requiredLevel: number;
}

const PostPopUp = ({
  src,
  isLocked,
  contentType,
  requiredLevel,
}: Props) => {
  return (
    <>
      <div className={styles.container}>
        <Media
          src={src}
          isLocked={isLocked}
          type='secondary'
          contentType={contentType}
        />
        {isLocked && <PostLock requiredLevel={requiredLevel} />}
      </div>
    </>
  );
};

export default PostPopUp;
