import styles from './Post.module.css';
import Avatar from '../Avatar/Avatar';
import { Heart, ChatCircle, ImageSquare } from '@phosphor-icons/react';
import img from '../../assets/post_test_img.png';

interface Props {
  avatar?: string;
  name?: string;
}

const Post = ({ avatar, name }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.media}>
        <img src={img} alt="post" className={styles.content}/>
      </div>
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
              <ChatCircle size={20} weight='regular'/>
              <p className={styles.number}>999</p>
            </div>
          </div>
          <div className={styles.iconContainer}>
            <ImageSquare size={20} weight='regular'/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
