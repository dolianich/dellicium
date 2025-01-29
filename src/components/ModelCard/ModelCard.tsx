import { Link } from 'react-router-dom';
import styles from './ModelCard.module.css';
import Badge from '../Badge/Badge';

interface Props {
  link: string;
  name: string;
  description: string;
}

const ModelCard = ({ link, name, description }: Props) => {
  return (
    <Link to={link} className={styles.wrapper}>
      <div className={styles.container}>
        <img src="" alt="" />
        <h2>{name.toLowerCase()}</h2>
        <div className={styles.tags}>
          <Badge /> <Badge /> <Badge />
        </div>
        <p>{description.toLowerCase()}</p>
      </div>
    </Link>
  );
};

export default ModelCard;
