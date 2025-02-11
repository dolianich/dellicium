import styles from './ProfileInfo.module.css';
import Avatar from '../../Avatar/Avatar';
import Stats from '../../Stats/Stats';
import Badge from '../../Badge/Badge';
import SocialButton from '../../SocialButton/SocialButton';
import Button from '../../Button/Button';
import { formatPoints } from '../../../utils/formatPoints';
import { getOrdinalSuffix } from '../../../utils/ordinalSuffix';
import { Info, UserCirclePlus } from '@phosphor-icons/react';
import { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

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
  progress: number;
}

const ProfileInfo = ({
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
}: Props) => {
  const [adopted, setAdopted] = useState('false');
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Avatar size="big" img={avatar} />
        <div className={styles.socials}>
          {socials.website && <SocialButton to={website!} />}
          {socials.x && <SocialButton to={x!} type="x" />}
          {socials.ig && <SocialButton to={ig!} type="ig" />}
        </div>
      </div>
      <p className={styles.username}>{username}</p>
      <h2 className={styles.name}>{name.toLowerCase()}</h2>
      <div className={styles.badges}>
        {tags?.map((tag) => (
          <Badge key={tag} type={tag} />
        ))}
      </div>
      <p className={styles.description}>{description.toLowerCase()}</p>
      <div className={styles.stats}>
        <Stats value={getOrdinalSuffix(level)} subtitle="level" type="left" />
        <Stats value={formatPoints(xp)} subtitle="xp" type="left" />
      </div>
      <div className={styles.bottomSection}>
        {adopted === 'true' ? (
          <>
            <ProgressBar progress={progress} />
          </>
        ) : (
          <Button onClick={() => setAdopted('true')} title="Adopt Creator">
            <UserCirclePlus size={20} weight="fill" /> Adopt Creator
          </Button>
        )}
        <Button
          title="More"
          variant={adopted === 'true' ? 'onlyIcon' : 'secondary'}
          onClick={() => setAdopted('false')}
        >
          <Info size={20} weight="regular" />
          {adopted === 'true' ? '' : 'More'}
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
