import styles from './PostSecondary.module.css';
import { Heart, ChatCircle } from '@phosphor-icons/react';
import Author from './Author/Author';
import Media from './Media/Media';
import PostLock from './PostLock/PostLock';
import Description from './Description/Description';
import Stat from './Stat/Stat';
import DonateBtn from './DonateBtn/DonateBtn';

interface Props {
  avatar?: string;
  name?: string;
  userLevel: number;
  requiredLevel: number;
  src?: string;
  likes?: number;
  comments?: number;
  descriptionText?: string;
  createdAt: string;
  donate?: () => void;
  contentType: 'image' | 'video';
}

const PostSecondary = ({
  avatar,
  name,
  userLevel,
  requiredLevel,
  src,
  likes,
  comments,
  descriptionText,
  createdAt,
  donate,
  contentType,
}: Props) => {
  const isLocked = userLevel < requiredLevel;

  return (
    <div className={styles.wrapper}>
      <Author
        avatar={avatar}
        name={name}
        type="secondary"
        timestamp={createdAt}
      />
      <div className={styles.container}>
        <Media
          src={src}
          type="secondary"
          isLocked={isLocked}
          contentType={contentType}
        />
        {isLocked && <PostLock requiredLevel={requiredLevel} />}
      </div>
      <Description type="secondary" descriptionText={descriptionText} />
      <div className={styles.bottom}>
        <div className={styles.stats}>
          <Stat icon={Heart} type="secondary" value={likes} />
          <Stat icon={ChatCircle} type="secondary" value={comments} />
        </div>
        <DonateBtn donate={donate} />
      </div>
    </div>
  );
};

export default PostSecondary;
