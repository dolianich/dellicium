import creators from '../data/creators';
import { useParams, useNavigate } from 'react-router-dom';
import WishCard from '../components/WishCard/WishCard';
import bed from '.././storage/wishes/bed.png';
import feeder from '.././storage/wishes/feeder.png';
import laser from '.././storage/wishes/laser.png';
import tree from '.././storage/wishes/tree.png';
import tuna from '.././storage/wishes/tuna.png';

const WishlistPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  const params = useParams<{ creatorId: string }>();
  const creator = creators.find(
    (creator) => creator.username === params.creatorId
  );

  const wishes = [
    {
      img: bed,
      title: 'Heated Cat Bed',
      description:
        'A plush, self-warming bed for the ultimate cat nap experience',
      price: 1.2,
    },
    {
      img: feeder,
      title: 'Personal Cat Butler',
      description:
        'A robotic feeder and treat dispenser that serves your cat on demand',
      price: 3.5,
    },
    {
      img: laser,
      title: 'Smart Laser Toy',
      description:
        'An automated laser toy that keeps your cat entertained for hours',
      price: 0.9,
    },
    {
      img: tree,
      title: 'Luxury Cat Tree',
      description:
        'A towering cat tree with scratching posts, hammocks, and a cozy hideout',
      price: 2.5,
    },
    {
      img: tuna,
      title: 'Gourmet Tuna Feast',
      description:
        'A year supply of premium, sushi-grade tuna for the fanciest of feline palates',
      price: 1.8,
    },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={handleNavigate}>Back</button> Wishlist {creator?.name}
      {wishes.map((wish) => (
        <WishCard
          title={wish.title}
          img={wish.img}
          description={wish.description}
          price={wish.price}
        />
      ))}
    </div>
  );
};

export default WishlistPage;
