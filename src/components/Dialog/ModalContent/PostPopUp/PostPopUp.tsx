import styles from './PostPopUp.module.css';
import Media from '../../../Post/Media/Media';
import PostLock from '../../../Post/PostLock/PostLock';
import Author from '../../../Post/Author/Author';
import Description from '../../../Post/Description/Description';
import Stat from '../../../Post/Stat/Stat';
import {
  Heart,
  ChatCircle,
  UserCirclePlus,
  HandCoins,
  X,
} from '@phosphor-icons/react';
import Button from '../../../Button/Button';

interface Props {
  src?: string;
  isLocked: boolean;
  contentType: 'image' | 'video';
  requiredLevel: number;
  avatar?: string;
  name?: string;
  createdAt: string;
  descriptionText?: string;
  likes?: number;
  comments?: number;
  adopted: boolean;
  gift: () => void;
  tips: () => void;
  adopt: () => void;
  onClose: () => void;
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
  likes,
  comments,
  adopted,
  gift,
  tips,
  adopt,
  onClose,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.closeBtn} onClick={onClose}>
        {' '}
        <X weight="regular" size={20} />
      </button>
      <div className={styles.container}>
        <Media
          src={src}
          isLocked={isLocked}
          type="secondary"
          contentType={contentType}
        />
        {isLocked && <PostLock requiredLevel={requiredLevel} />}
      </div>
      <div className={styles.postInfo}>
        <div className={styles.right}>
          <Author
            avatar={avatar}
            name={name}
            type="third"
            timestamp={createdAt}
          />
          <Description type="third" descriptionText={descriptionText} />
          <div className={styles.stats}>
            <Stat icon={Heart} type="secondary" value={likes} />
            <Stat icon={ChatCircle} type="secondary" value={comments} />
          </div>
        </div>

        <div className={styles.action}>
          {adopted ? (
            <Button
              onClick={() => {
                adopt();
              }}
              title="Donate"
            >
              <HandCoins size={20} weight="fill" /> Donate
            </Button>
          ) : (
            <Button
              onClick={() => {
                adopt();
              }}
              title="Adopt Creator"
            >
              <UserCirclePlus size={20} weight="fill" /> Adopt Creator
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPopUp;
