import styles from './PostsGrid.module.css';
import PostSecondary from '../Post/PostSecondary';
import PostSquare from '../Post/PostSquare';
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
  filter: string;
  adopted: boolean;
  gift: () => void;
  tips: () => void;
  adopt: () => void;
  userXp: number;
  progress: number;
  userName: string;
}

const PostsGrid = ({
  posts,
  creatorAvatar,
  creatorName,
  userLevel,
  donate,
  filter,
  adopted,
  gift,
  tips,
  adopt,
  userXp,
  progress,
  userName,
}: Props) => {
  const isMobile = useScreenSize();

  const imagePosts = posts?.filter((post) => post.contentType === 'image');
  const videoPosts = posts?.filter((post) => post.contentType === 'video');

  const postsToRender =
    filter === 'images' ? imagePosts : filter === 'videos' ? videoPosts : posts;

  return (
    <>
      {isMobile ? (
        <div className={styles.mobilePosts}>
          {postsToRender ? (
            postsToRender.map((post) => (
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
          {postsToRender ? (
            postsToRender.map((post) => (
              <PostSquare
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
                adopted={adopted}
                gift={gift}
                tips={tips}
                adopt={adopt}
                userXp={userXp}
                progress={progress}
                userName={userName}
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
