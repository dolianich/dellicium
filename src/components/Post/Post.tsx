import styles from './Post.module.css';
import {
  Heart,
  ChatCircle,
  ImageSquare,
  FilmStrip,
} from '@phosphor-icons/react';
import Author from './Author/Author';
import PostLock from './PostLock/PostLock';
import Media from './Media/Media';
import Description from './Description/Description';
import Stat from './Stat/Stat';

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
  contentType: 'image' | 'video';
}

const Post = ({
  avatar,
  name,
  userLevel,
  requiredLevel,
  src,
  likes,
  comments,
  descriptionText,
  createdAt,
  contentType,
}: Props) => {
  const isLocked = userLevel < requiredLevel;

  return (
    <div className={styles.container}>
      <Media src={src} isLocked={isLocked} contentType={contentType} />

      {isLocked && <PostLock requiredLevel={requiredLevel} />}

      <div className={styles.elements}>
        <Author avatar={avatar} name={name} timestamp={createdAt} />
        <div className={styles.bottom}>
          <Description descriptionText={descriptionText} />
          <div className={styles.bottomLine}>
            <div className={styles.stats}>
              <Stat icon={Heart} value={likes} />
              <Stat icon={ChatCircle} value={comments} />
            </div>
            <div className={styles.iconContainer}>
              {contentType === 'image' ? (
                <ImageSquare size={20} weight="regular" />
              ) : contentType === 'video' ? (
                <FilmStrip size={20} weight="regular" />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
