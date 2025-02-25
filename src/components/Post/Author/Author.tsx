import styles from './Author.module.css';
import Avatar from '../../Avatar/Avatar';
import { formatCreatedAt } from '../../../utils/formatDate';

interface Props {
  avatar?: string;
  name?: string;
  type?: string;
  timestamp: string;
}

const Author = ({ avatar, name, type, timestamp }: Props) => {
  return (
    <div className={type === 'secondary' ? styles.topSecondary : styles.top}>
      <Avatar size="xs" img={avatar} />
      <div className={styles.topText}>
        <p className={styles.name}>{name}</p>
        <p className={styles.date}>{formatCreatedAt(timestamp)}</p>
      </div>
    </div>
  );
};

export default Author;
