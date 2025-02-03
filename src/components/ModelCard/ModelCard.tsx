import { Link } from 'react-router-dom';
import styles from './ModelCard.module.css';
import Badge from '../Badge/Badge';
import Avatar from '../Avatar/Avatar';
import Stats from '../Stats/Stats';

interface Props {
  link: string;
  name: string;
  description: string;
  tags?: string[];
  img: string;
}

const ModelCard = ({ link, name, description, tags, img }: Props) => {
  return (
    <Link to={link} className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Stats />
          <Avatar size="small" img={img} />
          <Stats />
        </div>
        <h2>{name.toLowerCase()}</h2>
        <div className={styles.badges}>
          {tags?.map((tag) => (
            <Badge type={tag} />
          ))}
        </div>
        <p className={styles.description}>{description.toLowerCase()}</p>
      </div>
    </Link>
  );
};

export default ModelCard;
