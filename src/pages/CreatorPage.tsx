import { useParams } from 'react-router-dom';
import styles from './styles/Page.module.css';
import creators from '../data/creators';
import ProfileCard from '../components/ProfileCard/ProfileCard';

type Socials = {
  website?: string;
  ig?: string;
  x?: string;
};

const CreatorPage = () => {
  const params = useParams<{ creatorId: string }>();
  const creator = creators.find(
    (creator) => creator.username === params.creatorId
  );

  return (
    <div className={styles.main}>
      <ProfileCard
        avatar={creator?.avatar}
        username={creator?.username as string}
        name={creator?.name as string}
        tags={creator?.tags}
        description={creator?.bio as string}
        level={creator?.level as number}
        xp={creator?.xp as number}
        socials={creator?.socials as Socials}
        website={creator?.socials.website}
        ig={creator?.socials.ig}
        x={creator?.socials.x}
      />
    </div>
  );
};

export default CreatorPage;
