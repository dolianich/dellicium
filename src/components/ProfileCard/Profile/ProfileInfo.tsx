import styles from './ProfileInfo.module.css';
import Avatar from '../../Avatar/Avatar';
import user from '../../../storage/@camilaharper.png';
import Stats from '../../Stats/Stats';
import Badge from '../../Badge/Badge';
import SocialButton from '../../SocialButton/SocialButton';
import Button from '../../Button/Button';

const ProfileInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Avatar size="big" img={user} />
        <div className={styles.socials}>
          <SocialButton /> <SocialButton type="x" /> <SocialButton type="ig" />
        </div>
      </div>
      <p className={styles.username}>@username</p>
      <h2 className={styles.name}>name</h2>
      <div className={styles.badges}>
        <Badge type="verified" /> <Badge type="new" /> <Badge type="top" />
      </div>
      <p className={styles.description}>description text</p>
      <div className={styles.stats}>
        <Stats value={3} subtitle="level" type="left" />
        <Stats value={12} subtitle="xp" type="left" />
      </div>
      <Button text='Adopt'/>
    </div>
  );
};

export default ProfileInfo;
