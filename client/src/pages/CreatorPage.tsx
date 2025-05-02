import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import styles from './styles/Page.module.css';
import creators from '../data/creators';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import useScrollToTop from '../utils/useScrollToTop';
import PostsFilter from '../components/PostsFilter/PostsFilter';
import PostsGrid from '../components/PostsGrid/PostsGrid';
import Dialog from '../components/Dialog/Dialog';
import DonateContent from '../components/Dialog/ModalContent/DonateContent';
import GiftsGrid from '../components/GiftsGrid/GiftsGrid';
import Leaders from '../components/Leaders/Leaders';

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
  const [tipping, setTipping] = useState<string>('default');
  const [inputValue, setInputValue] = useState<string>('');
  const [tipError, setTipError] = useState<boolean>(false);
  const scrollPositionRef = useRef(0);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]*[,.]?[0-9]*$/.test(value)) {
      const standardizedValue = value.replace(/,/g, '.');
      setInputValue(standardizedValue);
    }
  };

  const sendTips = (inputValue: string) => {
    if (!inputValue) {
      setTipError(true);
      return;
    }
    const number = parseFloat(inputValue);
    setTipping('pending');
    setTimeout(() => {
      setTipping('default');
      const moneyToPints = Math.round(number * 5);
      addPoints(moneyToPints);
    }, 1500);
    setInputValue('');
  };

  const params = useParams<{ creatorId: string }>();
  const creator = creators.find(
    (creator) => creator.username === params.creatorId
  );

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (donateDialogRef.current?.hasAttribute('open')) {
      e.preventDefault();
    }
  };

  const donateDialogRef = useRef<HTMLDialogElement>(null);
  const donateToggleDialog = () => {
    if (!donateDialogRef.current) {
      return;
    }

    if (donateDialogRef.current.hasAttribute('open')) {
      donateDialogRef.current.close();
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPositionRef.current);
      document.removeEventListener('touchmove', handleTouchMove, {
        passive: false,
      } as EventListenerOptions);
    } else {
      scrollPositionRef.current = window.scrollY;
      donateDialogRef.current.showModal();
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      } as EventListenerOptions);
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.removeEventListener('touchmove', handleTouchMove, {
        passive: false,
      } as EventListenerOptions);
    };
  }, []);

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
            adopted={adopted}
            gift={() => addPoints(20)}
            tips={() => addPoints(10)}
            adopt={() => {
              setAdopted(!adopted);
              setUserLevel(1);
            }}
            userXp={points}
            progress={progress}
            userName={creator?.username as string}
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
            adopted={adopted}
            gift={() => addPoints(20)}
            tips={() => addPoints(10)}
            adopt={() => {
              setAdopted(!adopted);
              setUserLevel(1);
            }}
            userXp={points}
            progress={progress}
            userName={creator?.username as string}
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
            adopted={adopted}
            gift={() => addPoints(20)}
            tips={() => addPoints(10)}
            adopt={() => {
              setAdopted(!adopted);
              setUserLevel(1);
            }}
            userXp={points}
            progress={progress}
            userName={creator?.username as string}
          />
        );
      case 'gifts':
        return <GiftsGrid />;
      case 'leaderboard':
        return <Leaders />;
      default:
        return (
          <PostsGrid
            posts={creator?.posts as Post[]}
            userLevel={userLevel}
            creatorAvatar={creator?.avatar}
            creatorName={creator?.name}
            filter={selectedFilter}
            adopted={adopted}
            gift={() => addPoints(20)}
            tips={() => addPoints(10)}
            adopt={() => {
              setAdopted(!adopted);
              setUserLevel(1);
            }}
            userXp={points}
            progress={progress}
            userName={creator?.username as string}
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
        wishlistLink={`/creators/${creator!.username}/wishlist`}
        address={creator?.address}
      />
      <PostsFilter
        onFilterChange={handleFilterChange}
        selectedFilter={selectedFilter}
      />
      {renderSection()}

      <Dialog
        toggleDialog={donateToggleDialog}
        children={
          <DonateContent
            tips={() => {
              setTipping('tipping');
            }}
            gift={() => addPoints(20)}
            adopted={adopted}
            name={creator?.name}
            adopt={() => {
              setAdopted(!adopted);
              setUserLevel(1);
            }}
            avatar={creator?.avatar}
            toggleDialog={donateToggleDialog}
            userLevel={userLevel}
            userXp={points}
            progress={progress}
            wishlistLink={`/creators/${creator!.username}/wishlist`}
            tipping={tipping}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            sendTips={sendTips}
            back={() => setTipping('default')}
            tipError={tipError}
          />
        }
        ref={donateDialogRef}
      />
    </div>
  );
};

export default CreatorPage;
