import styles from './ProfileCard.module.css';
import ProfileInfo from './Profile/ProfileInfo';

interface Props {
  avatar?: string;
  username: string;
  name: string;
  tags?: string[];
  description: string;
  level: number;
  xp: number;
}

const ProfileCard = ({ avatar, username, name, tags, description, level, xp }: Props) => {
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
      />
      <div className={styles.actions}></div>
    </div>
  );
};

export default ProfileCard;
