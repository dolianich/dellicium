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
import { useRef } from 'react';
import Dialog from '../Dialog/Dialog';
import PostPopUp from '../Dialog/ModalContent/PostPopUp/PostPopUp';

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
  adopted: boolean;
  gift: () => void;
  tips: () => void;
  adopt: () => void;
  userXp: number;
  progress: number;
}

const PostSquare = ({
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
  adopted,
  gift,
  tips,
  adopt,
  userXp,
  progress
}: Props) => {
  const isLocked = userLevel < requiredLevel;

  const postDialogRef = useRef<HTMLDialogElement>(null);
  const postToggleDialog = () => {
    if (!postDialogRef.current) {
      return;
    }

    if (postDialogRef.current.hasAttribute('open')) {
      postDialogRef.current.close();
    } else {
      postDialogRef.current.showModal();
    }
  };

  return (
    <div className={styles.container} onClick={postToggleDialog}>
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
      <Dialog
        toggleDialog={postToggleDialog}
        ref={postDialogRef}
        children={
          <div>
            <PostPopUp
              src={src}
              isLocked={isLocked}
              contentType={contentType}
              requiredLevel={requiredLevel}
              avatar={avatar}
              createdAt={createdAt}
              name={name}
              descriptionText={descriptionText}
              likes={likes}
              comments={comments}
              adopted={adopted}
              gift={gift}
              tips={tips}
              adopt={adopt}
              onClose={postToggleDialog}
              userLevel={userLevel}
              userXp={userXp}
              progress={progress}
            />
          </div>
        }
        type="primary"
      />
    </div>
  );
};

export default PostSquare;
