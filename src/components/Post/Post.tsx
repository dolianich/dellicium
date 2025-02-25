import styles from './Post.module.css';
import { Heart, ChatCircle, ImageSquare } from '@phosphor-icons/react';
import img from '../../assets/post_test_img.png';
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
}

const Post = ({ avatar, name, userLevel, requiredLevel }: Props) => {
  const isLocked = userLevel < requiredLevel;

  return (
    <div className={styles.container}>
      <Media img={img} isLocked={isLocked} />

      {isLocked && <PostLock requiredLevel={requiredLevel} />}

      <div className={styles.elements}>
        <Author avatar={avatar} name={name} />
        <div className={styles.bottom}>
          <Description />
          <div className={styles.bottomLine}>
            <div className={styles.stats}>
              <Stat icon={Heart} />
              <Stat icon={ChatCircle} />
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
