import styles from './PostPopUp.module.css';
import Media from '../../../Post/Media/Media';
import PostLock from '../../../Post/PostLock/PostLock';
import Author from '../../../Post/Author/Author';
import Description from '../../../Post/Description/Description';

interface Props {
  src?: string;
  isLocked: boolean;
  contentType: 'image' | 'video';
  requiredLevel: number;
  avatar?: string;
  name?: string;
  createdAt: string;
  descriptionText?: string;
}

const PostPopUp = ({
  src,
  isLocked,
  contentType,
  requiredLevel,
  avatar,
  name,
  createdAt,
  descriptionText,
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
        <Description type="third" descriptionText={descriptionText} />
        <div style={{backgroundColor: "#ffffff", display: "flex", flex: '1', minWidth: '100%'}}></div>
      </div>
    </div>
  );
};

export default PostPopUp;