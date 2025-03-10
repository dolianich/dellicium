import styles from './PostPopUp.module.css';
import Media from '../../../Post/Media/Media';
import PostLock from '../../../Post/PostLock/PostLock';
import Author from '../../../Post/Author/Author';

interface Props {
  src?: string;
  isLocked: boolean;
  contentType: 'image' | 'video';
  requiredLevel: number;
  avatar?: string;
  name?: string;
  createdAt: string;
}

const PostPopUp = ({
  src,
  isLocked,
  contentType,
  requiredLevel,
  avatar,
  name,
  createdAt,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Media
          src={src}
          isLocked={isLocked}
          type="secondary"
          contentType={contentType}
        />
        {isLocked && <PostLock requiredLevel={requiredLevel} />}
      </div>
      <div className={styles.right}>
        <Author
          avatar={avatar}
          name={name}
          type="third"
          timestamp={createdAt}
        />
      </div>
    </div>
  );
};

export default PostPopUp;
