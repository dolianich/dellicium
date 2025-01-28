import { Link } from 'react-router-dom';

const ModelsPage = () => {
  const models = [1, 2, 3, 4, 5];

  return (
    <div>
      {models.map((model) => (
        <Link key={model} to={`/models/${model}`}>
          Model {model}
        </Link>
      ))}
    </div>
  );
};

export default ModelsPage;
