import { Link } from 'react-router-dom';
import styles from './CreatorCard.module.css';
import Badge from '../Badge/Badge';
import Avatar from '../Avatar/Avatar';
import Stats from '../Stats/Stats';
import { getOrdinalSuffix } from '../../utils/ordinalSuffix';
import { formatPoints } from '../../utils/formatPoints';

interface Props {
  link: string;
  name: string;
  description: string;
  tags?: string[];
  img: string;
  level: number;
  xp: number;
  username: string;
}

const CreatorCard = ({
  link,
  name,
  description,
  tags,
  img,
  level,
  xp,
  username,
}: Props) => {
  return (
    <Link to={link} className={styles.wrapper}>
      <div className={styles.container}>
        <Avatar size="small" img={img} />
        <p className={styles.username}>{username}</p>
        <h2>{name.toLowerCase()}</h2>
        <div className={styles.stats}>
          <Stats value={getOrdinalSuffix(level)} subtitle="level" />
          <div className={styles.divider} />
          <Stats value={formatPoints(xp)} subtitle="xp" />
        </div>
        <div className={styles.badges}>
          {tags?.map((tag) => (
            <Badge  key={tag} type={tag} />
          ))}
        </div>

        <p className={styles.description}>{description.toLowerCase()}</p>
      </div>
    </Link>
  );
};

export default CreatorCard;
