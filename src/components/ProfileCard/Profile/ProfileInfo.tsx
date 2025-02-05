import styles from './ProfileInfo.module.css';
import Avatar from '../../Avatar/Avatar';
import Stats from '../../Stats/Stats';
import Badge from '../../Badge/Badge';
import SocialButton from '../../SocialButton/SocialButton';
import Button from '../../Button/Button';
import { formatPoints } from '../../../utils/formatPoints';
import { getOrdinalSuffix } from '../../../utils/ordinalSuffix';

interface Props {
  avatar?: string;
  username: string;
  name: string;
  tags?: string[];
  description: string;
  level: number;
  xp: number;
}

const ProfileInfo = ({
  avatar,
  username,
  name,
  tags,
  description,
  level,
  xp,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Avatar size="big" img={avatar} />
        <div className={styles.socials}>
          <SocialButton /> <SocialButton type="x" /> <SocialButton type="ig" />
        </div>
      </div>
      <p className={styles.username}>{username}</p>
      <h2 className={styles.name}>{name.toLowerCase()}</h2>
      <div className={styles.badges}>
        {tags?.map((tag) => (
          <Badge key={tags.toString()} type={tag} />
        ))}
      </div>
      <p className={styles.description}>{description.toLowerCase()}</p>
      <div className={styles.stats}>
        <Stats value={getOrdinalSuffix(level)} subtitle="level" type="left" />
        <Stats value={formatPoints(xp)} subtitle="xp" type="left" />
      </div>
      <Button text="Adopt" />
    </div>
  );
};

export default ProfileInfo;
