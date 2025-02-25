import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './styles/Page.module.css';
import creators from '../data/creators';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import useScrollToTop from '../utils/useScrollToTop';
import Post from '../components/Post/Post';
import PostSecondary from '../components/Post/PostSecondary';

type Socials = {
  website?: string;
  ig?: string;
  x?: string;
};

const CreatorPage = () => {
  const [points, setPoints] = useState(0);
  const [userLevel, setUserLevel] = useState(0);
  const [adopted, setAdopted] = useState(false);

  const pointsRequiredForNextLevel = userLevel === 1 ? 50 : userLevel * 100;
  const progress = (points / pointsRequiredForNextLevel) * 100;

  const addPoints = (xpAmount: number) => {
    const newPoints = points + xpAmount;

    if (newPoints >= pointsRequiredForNextLevel) {
      const excessPoints = newPoints - pointsRequiredForNextLevel;
      setUserLevel((prevLevel) => prevLevel + 1);
      setPoints(excessPoints);
    } else {
      setPoints(newPoints);
    }
  };

  const params = useParams<{ creatorId: string }>();
  const creator = creators.find(
    (creator) => creator.username === params.creatorId
  );

  useScrollToTop();

  return (
    <div className={styles.profile}>
      <ProfileCard
        avatar={creator?.avatar}
        username={creator?.username as string}
        name={creator?.name as string}
        tags={creator?.tags}
        description={creator?.bio as string}
        level={creator?.level as number}
        xp={creator?.xp as number}
        socials={creator?.socials as Socials}
        website={creator?.socials.website}
        ig={creator?.socials.ig}
        x={creator?.socials.x}
        adopt={() => {
          setAdopted(!adopted);
          setUserLevel(1);
        }}
        progress={progress}
        adopted={adopted}
        userXp={points}
        userLevel={userLevel}
        tips={() => addPoints(10)}
        gift={() => addPoints(20)}
      />
      {<div className={styles.posts}>
        <Post
          avatar={creator?.avatar}
          name={creator?.name}
          userLevel={userLevel}
          requiredLevel={0}
        ></Post>
        <Post
          avatar={creator?.avatar}
          name={creator?.name}
          userLevel={userLevel}
          requiredLevel={1}
        ></Post>
        <Post
          avatar={creator?.avatar}
          name={creator?.name}
          userLevel={userLevel}
          requiredLevel={2}
        ></Post>
        <Post
          avatar={creator?.avatar}
          name={creator?.name}
          userLevel={userLevel}
          requiredLevel={3}
        ></Post>
        <Post
          avatar={creator?.avatar}
          name={creator?.name}
          userLevel={userLevel}
          requiredLevel={3}
        ></Post>
      </div>
      }
    </div>
  );
};

export default CreatorPage;
