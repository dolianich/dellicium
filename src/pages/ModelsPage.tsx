import models from '../data/models';
import ModelCard from '../components/ModelCard/ModelCard';
import styles from './styles/ModelsPage.module.css';
const ModelsPage = () => {
  return (
    <div className={styles.main}>
      {models.map((model) => (
        <ModelCard
          key={model.id}
          name={model.name}
          link={`/models/${model.username}`}
          description={model.bio}
          tags={model.tags}
        />
      ))}
    </div>
  );
};

export default ModelsPage;
