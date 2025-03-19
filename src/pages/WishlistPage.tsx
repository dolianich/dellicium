import creators from '../data/creators';
import { useParams, useNavigate } from 'react-router-dom';
import WishCard from '../components/WishCard/WishCard';

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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={handleNavigate}>Back</button> Wishlist {creator?.name}
      <WishCard />
    </div>
  );
};

export default WishlistPage;
