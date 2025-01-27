import styles from './Profile.module.css';
import { UserCircle } from '@phosphor-icons/react';

const Profile = () => {
  return (
    <button className={styles.profile}>
      <UserCircle weight='regular' size={20}/>
    </button>
  );
};

export default Profile;
