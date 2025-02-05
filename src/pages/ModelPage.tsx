import { useParams } from 'react-router-dom';
import styles from './styles/Page.module.css';
import models from '../data/models';
import ProfileCard from '../components/ProfileCard/ProfileCard';

const ModelPage = () => {
  const params = useParams<{ modelId: string }>();
  const model = models.find((model) => model.username === params.modelId);

  return (
    <div className={styles.main}>
      <ProfileCard />
    </div>
  );
};

export default ModelPage;
