import models from '../data/models';
import ModelCard from '../components/ModelCard/ModelCard';

const ModelsPage = () => {
  return (
    <div>
      {models.map((model) => (
        <ModelCard
          key={model.id}
          name={model.name}
          link={`/models/${model.username}`}
          description={model.bio}
        />
      ))}
    </div>
  );
};

export default ModelsPage;
