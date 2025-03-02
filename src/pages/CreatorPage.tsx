import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';
import styles from './styles/Page.module.css';
import creators from '../data/creators';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import useScrollToTop from '../utils/useScrollToTop';
import PostsFilter from '../components/PostsFilter/PostsFilter';
import PostsGrid from '../components/PostsGrid/PostsGrid';
import Dialog from '../components/Dialog/Dialog';
import DonateContent from '../components/Dialog/ModalContent/DonateContent';

type Socials = {
  website?: string;
  ig?: string;
  x?: string;
};

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

const CreatorPage = () => {
  const [points, setPoints] = useState(0);
  const [userLevel, setUserLevel] = useState(0);
  const [adopted, setAdopted] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

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

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const donateDialogRef = useRef<HTMLDialogElement>(null);
  const donateToggleDialog = () => {
    if (!donateDialogRef.current) {
      return;
    }

    if (donateDialogRef.current.hasAttribute('open')) {
      donateDialogRef.current.close();
    } else {
      donateDialogRef.current.showModal();
    }
  };

  const dialogRefSecond = useRef<HTMLDialogElement>(null);
  const toggleDialogSecond = () => {
    if (!dialogRefSecond.current) {
      return;
    }

    if (dialogRefSecond.current.hasAttribute('open')) {
      dialogRefSecond.current.close();
    } else {
      dialogRefSecond.current.showModal();
    }
  };

  const renderSection = () => {
    switch (selectedFilter) {
      case 'all':
        return (
          <PostsGrid
            posts={creator?.posts as Post[]}
            userLevel={userLevel}
            creatorAvatar={creator?.avatar}
            creatorName={creator?.name}
            donate={donateToggleDialog}
            filter={selectedFilter}
          />
        );
      case 'images':
        return (
          <PostsGrid
            posts={creator?.posts as Post[]}
            userLevel={userLevel}
            creatorAvatar={creator?.avatar}
            creatorName={creator?.name}
            donate={donateToggleDialog}
            filter={selectedFilter}
          />
        );
      case 'videos':
        return (
          <PostsGrid
            posts={creator?.posts as Post[]}
            userLevel={userLevel}
            creatorAvatar={creator?.avatar}
            creatorName={creator?.name}
            donate={donateToggleDialog}
            filter={selectedFilter}
          />
        );
      case 'gifts':
        return <div>Gifts</div>;
      case 'leaderboard':
        return <div>Leaderboard</div>;
      default:
        return (
          <PostsGrid
            posts={creator?.posts as Post[]}
            userLevel={userLevel}
            creatorAvatar={creator?.avatar}
            creatorName={creator?.name}
            filter={selectedFilter}
          />
        );
    }
  };

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
      <PostsFilter
        onFilterChange={handleFilterChange}
        selectedFilter={selectedFilter}
      />
      {renderSection()}
      <Dialog
        ref={dialogRefSecond}
        toggleDialog={toggleDialogSecond}
        children={<p>test</p>}
      />
      <Dialog
        toggleDialog={donateToggleDialog}
        children={
          <DonateContent
            tips={() => addPoints(10)}
            gift={() => addPoints(20)}
            adopted={adopted}
            userLevel={userLevel}
            progress={progress}
            userXp={points}
            adopt={() => {
              setAdopted(!adopted);
              setUserLevel(1);
            }}
            avatar={creator?.avatar}
            toggleDialog={donateToggleDialog}
          />
        }
        ref={donateDialogRef}
      />
    </div>
  );
};

export default CreatorPage;
