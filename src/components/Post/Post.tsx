import styles from './Post.module.css';
import Avatar from '../Avatar/Avatar';
import { Heart, ChatCircle, ImageSquare } from '@phosphor-icons/react';
import img from '../../assets/post_test_img.png';
import Indicator from '../ProfileCard/ProgressBar/Indicator/Indicator';

interface Props {
  avatar?: string;
  name?: string;
  userLevel: number;
  requiredLevel: number;
}

const Post = ({ avatar, name, userLevel, requiredLevel }: Props) => {
  const isLocked = userLevel < requiredLevel;

  return (
    <div className={styles.container}>
      <div className={`${styles.media} ${isLocked ? styles.mediaLocked : ''}`}>
        <img src={img} alt="post" className={styles.content} />
      </div>

      {isLocked && (
        <div className={styles.postLock}>
          <p className={styles.requiredText}>required level:</p>
          <Indicator
            state="active"
            type={
              requiredLevel === 1
                ? 'first'
                : requiredLevel === 2
                ? 'second'
                : requiredLevel === 3
                ? 'third'
                : ''
            }
          />
        </div>
      )}

      <div className={styles.elements}>
        <div className={styles.top}>
          <Avatar size="xs" img={avatar} />
          <div className={styles.topText}>
            <p className={styles.name}>{name}</p>
            <p className={styles.date}>1m ago</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              text text text text text text text text text text text text text
              text
            </p>
          </div>
          <div className={styles.bottomLine}>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <Heart size={20} weight="regular" />
                <p className={styles.number}>999</p>
              </div>
              <div className={styles.stat}>
                <ChatCircle size={20} weight="regular" />
                <p className={styles.number}>999</p>
              </div>
            </div>
            <div className={styles.iconContainer}>
              <ImageSquare size={20} weight="regular" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
