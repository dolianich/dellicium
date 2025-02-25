import styles from './PostSecondary.module.css';
import { Heart, ChatCircle } from '@phosphor-icons/react';
import img from '../../assets/post_test_img.png';
import pic from '../../storage/elenathestar.jpg';
import Author from './Author/Author';
import Media from './Media/Media';
import PostLock from './PostLock/PostLock';
import Description from './Description/Description';
import Stat from './Stat/Stat';
import DonateBtn from './DonateBtn/DonateBtn';

interface Props {
  avatar?: string;
  name?: string;
  userLevel: number;
  requiredLevel: number;
}

const PostSecondary = ({ avatar, name, userLevel, requiredLevel }: Props) => {
  const isLocked = userLevel < requiredLevel;

  return (
    <div className={styles.wrapper}>
      <Author avatar={avatar} name={name} type='secondary'/>
      <div className={styles.container}>
        <Media img={pic} type="secondary" isLocked={isLocked} />
        {isLocked && <PostLock requiredLevel={requiredLevel} />}
      </div>
      <Description type="secondary" />
      <div className={styles.bottom}>
        <div className={styles.stats}>
          <Stat icon={Heart} type="secondary" />
          <Stat icon={ChatCircle} type="secondary" />
        </div>
        <DonateBtn />
      </div>
    </div>
  );
};

export default PostSecondary;
