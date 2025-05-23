import styles from './ProfileCard.module.css';
import ProfileInfo from './Profile/ProfileInfo';
import Actions from './Actions/Actions';
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
  adopt: () => void;
  progress: number;
  adopted: boolean;
  userXp: number;
  userLevel: number;
  tips: () => void;
  gift: () => void;
  wishlistLink?: string;
  address?: string;
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
  progress,
  adopt,
  adopted,
  userXp,
  userLevel,
  tips,
  gift,
  wishlistLink,
  address
}: Props) => {
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
        adopt={adopt}
        adopted={adopted}
        userXp={userXp}
        userLevel={userLevel}
        address={address}
      />
      {adopted ? (
        <Actions tips={tips} gift={gift} link={wishlistLink} />
      ) : (
        <Hide />
      )}
    </div>
  );
};

export default ProfileCard;
