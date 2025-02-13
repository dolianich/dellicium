import styles from './ProfileCard.module.css';
import ProfileInfo from './Profile/ProfileInfo';
import Actions from './Actions/Actions';
import { useState } from 'react';
import Hide from './Actions/Hide/Hide';

type Socials = {
  website?: string;
  ig?: string;
  x?: string;
};

interface Props {
  avatar?: string;
  username: string;
  name: string;
  tags?: string[];
  description: string;
  level: number;
  xp: number;
  socials: Socials;
  website?: string;
  ig?: string;
  x?: string;
}

const ProfileCard = ({
  avatar,
  username,
  name,
  tags,
  description,
  level,
  xp,
  socials,
  website,
  ig,
  x,
}: Props) => {
  const [points, setPoints] = useState(0);
  const [userLevel, setUserLevel] = useState(1);

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

  const [adopted, setAdopted] = useState(false);

  return (
    <div className={styles.profile}>
      <ProfileInfo
        avatar={avatar}
        username={username}
        name={name}
        tags={tags}
        description={description}
        level={level}
        xp={xp}
        socials={socials}
        ig={ig}
        website={website}
        x={x}
        progress={progress}
        adopt={() => {
          setAdopted(!adopted);
        }}
        adopted={adopted}
        userXp={points}
      />
      {adopted ? (
        <Actions tips={() => addPoints(10)} gift={() => addPoints(20)} />
      ) : (
        <Hide />
      )}
    </div>
  );
};

export default ProfileCard;
