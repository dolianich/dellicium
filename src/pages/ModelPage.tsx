import { useParams } from 'react-router-dom';
import styles from './styles/Page.module.css';
import models from '../data/models';
import ProfileCard from '../components/ProfileCard/ProfileCard';

const ModelPage = () => {
  const params = useParams<{ modelId: string }>();
  const model = models.find((model) => model.username === params.modelId);

  return (
    <div className={styles.main}>
      <ProfileCard
        avatar={model?.avatar}
        username={model?.username as string}
        name={model?.name as string}
        tags={model?.tags}
        description={model?.bio as string}
        level={model?.level as number}
        xp={model?.xp as number}
      />
    </div>
  );
};

export default ModelPage;
