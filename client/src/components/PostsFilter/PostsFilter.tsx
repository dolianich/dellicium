import styles from './PostsFilter.module.css';
import PostFilterBtn from './PostFilterBtn/PostFilterBtn';
import { ImageSquare, FilmStrip, Gift, Trophy } from '@phosphor-icons/react';

interface Props {
  onFilterChange: (filter: string) => void;
  selectedFilter: string;
}

const PostsFilter = ({ onFilterChange, selectedFilter }: Props) => {
  return (
    <div className={styles.filter}>
      <div className={styles.section}>
        <PostFilterBtn
          onFilterChange={onFilterChange}
          children={
            <p
              className={
                selectedFilter === 'all' ? styles.textSelected : styles.text
              }
            >
              All
            </p>
          }
          id="all"
        />{' '}
        <PostFilterBtn
          onFilterChange={onFilterChange}
          children={
            <ImageSquare
              size={20}
              className={selectedFilter === 'images' ? styles.iconSelected : ''}
              weight={selectedFilter === 'images' ? 'fill' : 'regular'}
            />
          }
          id="images"
        />{' '}
        <PostFilterBtn
          onFilterChange={onFilterChange}
          children={
            <FilmStrip
              size={20}
              className={selectedFilter === 'videos' ? styles.iconSelected : ''}
              weight={selectedFilter === 'videos' ? 'fill' : 'regular'}
            />
          }
          id="videos"
        />
      </div>
      <div className={styles.section}>
        <PostFilterBtn
          onFilterChange={onFilterChange}
          children={
            <Gift
              size={20}
              className={selectedFilter === 'gifts' ? styles.iconSelected : ''}
              weight={selectedFilter === 'gifts' ? 'fill' : 'regular'}
            />
          }
          id="gifts"
        />{' '}
        <PostFilterBtn
          onFilterChange={onFilterChange}
          children={
            <Trophy
              size={20}
              className={
                selectedFilter === 'leaderboard' ? styles.iconSelected : ''
              }
              weight={selectedFilter === 'leaderboard' ? 'fill' : 'regular'}
            />
          }
          id="leaderboard"
        />
      </div>
    </div>
  );
};

export default PostsFilter;
