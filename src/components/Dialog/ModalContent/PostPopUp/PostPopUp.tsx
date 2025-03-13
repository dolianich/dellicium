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
  CaretLeft,
} from '@phosphor-icons/react';
import Button from '../../../Button/Button';
import { useState } from 'react';
import Donate from './Donate/Donate';

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
  userLevel: number;
  userXp: number;
  progress: number;
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
  userLevel,
  userXp,
  progress,
}: Props) => {
  const [donation, setDonation] = useState(false);

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
      <div className={!donation ? styles.postInfo : styles.postInfoDonate}>
        <div className={styles.authorContainer}>
          <Author
            avatar={avatar}
            name={name}
            type="third"
            timestamp={createdAt}
          />
        </div>
        <>
          {!donation ? (
            <div className={styles.right}>
              <Description type="third" descriptionText={descriptionText} />
              <div className={styles.stats}>
                <Stat icon={Heart} type="secondary" value={likes} />
                <Stat icon={ChatCircle} type="secondary" value={comments} />
              </div>
            </div>
          ) : (
            <div className={styles.right}>
              <Donate
                userLevel={userLevel}
                userXp={userXp}
                progress={progress}
                tips={tips}
                gift={gift}
              />
            </div>
          )}
        </>

        <div className={styles.action}>
          {adopted && !donation ? (
            <Button onClick={() => setDonation(!donation)} title="Donate">
              <HandCoins size={20} weight="fill" /> Donate
            </Button>
          ) : adopted && donation ? (
            <Button onClick={() => setDonation(!donation)} title="Donate">
              <CaretLeft size={20} weight="regular" />
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
