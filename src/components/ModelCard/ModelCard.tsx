import { Link } from 'react-router-dom';
import styles from './ModelCard.module.css';
import Badge from '../Badge/Badge';
import modelAvatar from '../../assets/user_test.png';

interface Props {
  link: string;
  name: string;
  description: string;
  tags?: string[];
}

const ModelCard = ({ link, name, description, tags }: Props) => {
  return (
    <Link to={link} className={styles.wrapper}>
      <div className={styles.container}>
        <img src={modelAvatar} alt="avatar" />
        <h2>{name.toLowerCase()}</h2>
        <div className={styles.badges}>
          {tags?.map((tag) => <Badge type={tag} />)}
        </div>
        <p>{description.toLowerCase()}</p>
      </div>
    </Link>
  );
};

export default ModelCard;
