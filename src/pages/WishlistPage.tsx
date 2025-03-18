import creators from '../data/creators';
import { useParams, useNavigate } from 'react-router-dom';

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
    <div>
      <button onClick={handleNavigate}>Back</button> Wishlist {creator?.name}
    </div>
  );
};

export default WishlistPage;
