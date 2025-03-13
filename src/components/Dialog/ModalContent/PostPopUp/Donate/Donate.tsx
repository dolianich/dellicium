import styles from './Donate.module.css';
import Indicator from '../../../../ProfileCard/ProgressBar/Indicator/Indicator';
import ProgressBar from '../../../../ProfileCard/ProgressBar/ProgressBar';
import DonateBtn from '../../../../ProfileCard/Actions/DonateBtn/DonateBtn';
import ActionBtn from '../../../../ProfileCard/Actions/ActionBtn/ActionBtn';

interface Props {
  userLevel: number;
  userXp: number;
  progress: number;
  tips?: () => void;
  gift?: () => void;
}

const Donate = ({ userLevel, userXp, progress, tips, gift }: Props) => {
  return (
    <div className={styles.donateActions}>
      <div className={styles.achievements}>
        <Indicator state={userLevel >= 1 ? 'active' : 'static'} type="first" />{' '}
        <Indicator state={userLevel >= 2 ? 'active' : 'static'} type="second" />{' '}
        <Indicator state={userLevel >= 3 ? 'active' : 'static'} type="third" />
      </div>
      <div>
        <ProgressBar
          progress={progress}
          userXp={userXp}
          userLevel={userLevel}
        />
      </div>
      <div className={styles.donations}>
        <DonateBtn onClick={() => tips} type="tips" variant="secondary" />{' '}
        <DonateBtn onClick={() => gift} type="gift" variant="secondary" />
        <div className={styles.secondaryActions}>
          <ActionBtn
            title="Wishlist"
            subtitle="make dreams happen"
            type="wishlist"
          />
        </div>
      </div>
    </div>
  );
};

export default Donate;
