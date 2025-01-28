import { Link } from 'react-router-dom';
import models from '../data/models';

const ModelsPage = () => {
  return (
    <div>
      {models.map((model) => (
        <Link key={model.id} to={`/models/${model.username}`}>
          {model.name}
        </Link>
      ))}
    </div>
  );
};

export default ModelsPage;
