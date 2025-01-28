import { useParams } from 'react-router-dom';
import models from '../data/models';

const ModelPage = () => {
  const params = useParams<{ modelId: string }>();
  const model = models.find((model) => model.username === params.modelId);
  console.log(model);

  return <div>Model Page {model?.name}</div>;
};

export default ModelPage;
