import creators from '../data/creators';
import { useParams } from 'react-router-dom';

const WishlistPage = () => {
  const params = useParams<{ creatorId: string }>();
  const creator = creators.find(
    (creator) => creator.username === params.creatorId
  );
  return <div>Wishlist {creator?.name}</div>;
};

export default WishlistPage;
