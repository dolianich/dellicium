import styles from './ProfileCard.module.css';
import ProfileInfo from './Profile/ProfileInfo';
import Actions from './Actions/Actions';
import { useState } from 'react';

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
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

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
      />
      <Actions tips={increaseProgress} gift={increaseProgress} />
    </div>
  );
};

export default ProfileCard;
