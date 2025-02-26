import styles from './PostsFilter.module.css';
import PostFilterBtn from './PostFilterBtn/PostFilterBtn';
import { ImageSquare, FilmStrip, Gift, Trophy } from '@phosphor-icons/react';

const PostsFilter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.section}>
        <PostFilterBtn children={<p className={styles.text}>All</p>} />{' '}
        <PostFilterBtn children={<ImageSquare size={20} />} />{' '}
        <PostFilterBtn children={<FilmStrip size={20} />} />
      </div>
      <div className={styles.section}>
        <PostFilterBtn children={<Gift size={20} />} />{' '}
        <PostFilterBtn children={<Trophy size={20} />} />
      </div>
    </div>
  );
};

export default PostsFilter;
