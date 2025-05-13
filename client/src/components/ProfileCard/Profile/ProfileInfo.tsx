import styles from './ProfileInfo.module.css';
import Avatar from '../../Avatar/Avatar';
import Stats from '../../Stats/Stats';
import Badge from '../../Badge/Badge';
import SocialButton from '../../SocialButton/SocialButton';
import Button from '../../Button/Button';
import { formatPoints } from '../../../utils/formatPoints';
import { getOrdinalSuffix } from '../../../utils/ordinalSuffix';
import { UserCirclePlus } from '@phosphor-icons/react';
import ProgressBar from '../ProgressBar/ProgressBar';
import MoreBtn from '../MoreBtn/MoreBtn';
import Indicator from '../ProgressBar/Indicator/Indicator';
import { shortenString } from '../../../utils/shortenString';
import { Link } from 'react-router-dom';

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
  adopted: boolean;
  adopt: () => void;
  userXp?: number;
  userLevel: number;
  address?: string;
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
  adopted,
  adopt,
  userXp,
  userLevel,
  address,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainSection}>
        <div className={styles.main}>
          <div className={styles.topSection}>
            <div className={styles.top}>
              <Avatar size="big" img={avatar} />
              <p className={styles.username2}>{username}</p>
              <div className={styles.topRightSection}>
                <div className={styles.badgesAndStats}>
                  <div className={styles.badges}>
                    {tags?.map((tag) => (
                      <Badge key={tag} type={tag} />
                    ))}
                  </div>
                  <div className={styles.stats}>
                    <Stats
                      value={getOrdinalSuffix(level)}
                      subtitle="level"
                      type="left"
                    />
                    <div className={styles.divider} />
                    <Stats value={formatPoints(xp)} subtitle="xp" type="left" />
                  </div>
                </div>
                <Link
                  to={`https://explorer.solana.com/address/${address}?cluster=devnet`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.address}
                >
                  {shortenString(address!)}
                </Link>
              </div>
            </div>
            <p className={styles.username}>{username}</p>
          </div>

          <h2 className={styles.name}>{name.toLowerCase()}</h2>
          <p className={styles.description}>{description.toLowerCase()}</p>
          <div className={styles.achievements}>
            <Indicator
              state={userLevel >= 1 ? 'active' : 'static'}
              type="first"
            />{' '}
            <Indicator
              state={userLevel >= 2 ? 'active' : 'static'}
              type="second"
            />{' '}
            <Indicator
              state={userLevel >= 3 ? 'active' : 'static'}
              type="third"
            />
          </div>
        </div>
        <div className={styles.socials}>
          {socials.website && <SocialButton to={website!} />}
          {socials.x && <SocialButton to={x!} type="x" />}
          {socials.ig && <SocialButton to={ig!} type="ig" />}
          <MoreBtn />
        </div>
      </div>
      <div className={styles.bottomSection}>
        {adopted ? (
          <>
            <ProgressBar
              progress={progress}
              userXp={userXp}
              userLevel={userLevel}
            />
          </>
        ) : (
          <Button onClick={adopt} title="Adopt Creator">
            <UserCirclePlus size={20} weight="fill" /> Adopt Creator
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
