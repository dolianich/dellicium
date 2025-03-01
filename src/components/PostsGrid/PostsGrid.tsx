import styles from './PostsGrid.module.css';
import PostSecondary from '../Post/PostSecondary';
import Post from '../Post/Post';
import useScreenSize from '../../utils/useScreenSize';

type Post = {
  id: number;
  date: string;
  createdAt: string;
  description: string;
  mediaLink: string;
  likes: number;
  comments: number;
  levelRequired: number;
  contentType: 'image' | 'video';
};

interface Props {
  posts?: Post[];
  creatorAvatar?: string;
  creatorName?: string;
  userLevel: number;
  donate?: () => void;
}

const PostsGrid = ({
  posts,
  creatorAvatar,
  creatorName,
  userLevel,
  donate,
}: Props) => {
  const isMobile = useScreenSize();
  return (
    <>
      {isMobile ? (
        <div className={styles.mobilePosts}>
          {posts ? (
            posts.map((post) => (
              <PostSecondary
                key={post.id}
                avatar={creatorAvatar}
                name={creatorName}
                userLevel={userLevel}
                requiredLevel={post.levelRequired}
                src={post.mediaLink}
                likes={post.likes}
                comments={post.comments}
                descriptionText={post.description}
                createdAt={post.createdAt}
                donate={donate}
                contentType={post.contentType}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className={styles.posts}>
          {posts ? (
            posts.map((post) => (
              <Post
                key={post.id}
                avatar={creatorAvatar}
                name={creatorName}
                userLevel={userLevel}
                requiredLevel={post.levelRequired}
                src={post.mediaLink}
                likes={post.likes}
                comments={post.comments}
                descriptionText={post.description}
                createdAt={post.createdAt}
                contentType={post.contentType}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default PostsGrid;
