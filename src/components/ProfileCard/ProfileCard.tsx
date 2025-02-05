import styles from './ProfileCard.module.css';
import ProfileInfo from './Profile/ProfileInfo';

const ProfileCard = () => {
  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <div className={styles.actions}></div>
    </div>
  );
};

export default ProfileCard;
