import { useParams } from 'react-router-dom';

const ModelPage = () => {
  const params = useParams<{modelId: string}>();
  return <div>Model Page {params.modelId}</div>;
};

export default ModelPage;
