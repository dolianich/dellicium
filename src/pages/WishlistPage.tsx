import styles from './styles/Page.module.css';
import creators from '../data/creators';
import { useParams, useNavigate } from 'react-router-dom';
import WishesGrid from '../components/WishesGrid/WishesGrid';
import Avatar from '../components/Avatar/Avatar';
import BackBtn from '../components/BackBtn/BackBtn';
import useScrollToTop from '../utils/useScrollToTop';

const WishlistPage = () => {
  useScrollToTop();
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
      <div className={styles.wishTop}>
        <BackBtn onClick={handleNavigate} />
        <Avatar size="medium" img={creator?.avatar} />
      </div>
      <WishesGrid />
    </div>
  );
};

export default WishlistPage;
