import styles from './ProfileCard.module.css';
import ProfileInfo from './Profile/ProfileInfo';

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
}

const ProfileCard = ({
  avatar,
  username,
  name,
  tags,
  description,
  level,
  xp,
  socials
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
      />
      <div className={styles.actions}></div>
    </div>
  );
};

export default ProfileCard;
