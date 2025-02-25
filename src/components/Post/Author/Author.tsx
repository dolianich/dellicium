import styles from './Author.module.css';
import Avatar from '../../Avatar/Avatar';

interface Props {
  avatar?: string;
  name?: string;
  type?: string;
}

const Author = ({ avatar, name, type }: Props) => {
  return (
    <div className={type === 'secondary' ? styles.topSecondary : styles.top}>
      <Avatar size="xs" img={avatar} />
      <div className={styles.topText}>
        <p className={styles.name}>{name}</p>
        <p className={styles.date}>1m ago</p>
      </div>
    </div>
  );
};

export default Author;
