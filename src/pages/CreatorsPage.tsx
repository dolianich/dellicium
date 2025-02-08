import creators from '../data/creators';
import CreatorCard from '../components/CreatorCard/CreatorCard';
import styles from './styles/Page.module.css';
const CreatorsPage = () => {
  return (
    <div className={styles.cardsGrid}>
      {creators.map((creator) => (
        <CreatorCard
          key={creator.id}
          name={creator.name}
          link={`/creators/${creator.username}`}
          description={creator.bio}
          tags={creator.tags}
          img={creator.avatar}
          level={creator.level}
          xp={creator.xp}
          username={creator.username}
        />
      ))}
    </div>
  );
};

export default CreatorsPage;
