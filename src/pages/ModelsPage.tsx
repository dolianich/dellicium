import models from '../data/models';
import ModelCard from '../components/ModelCard/ModelCard';
import styles from './styles/Page.module.css';
const ModelsPage = () => {
  return (
    <div className={styles.cardsGrid}>
      {models.map((model) => (
        <ModelCard
          key={model.id}
          name={model.name}
          link={`/models/${model.username}`}
          description={model.bio}
          tags={model.tags}
          img={model.avatar}
          level={model.level}
          xp={model.xp}
          username={model.username}
        />
      ))}
    </div>
  );
};

export default ModelsPage;
