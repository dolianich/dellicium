import styles from './styles/Page.module.css';
import creators from '../data/creators';
import { useParams, useNavigate } from 'react-router-dom';
import WishesGrid from '../components/WishesGrid/WishesGrid';

const WishlistPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  const params = useParams<{ creatorId: string }>();
  const creator = creators.find(
    (creator) => creator.username === params.creatorId
  );

  return (
    <div className={styles.container}>
      <button onClick={handleNavigate}>Back</button> Wishlist {creator?.name}
      <WishesGrid />
    </div>
  );
};

export default WishlistPage;
