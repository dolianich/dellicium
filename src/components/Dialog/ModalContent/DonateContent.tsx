import DonateBtn from '../../ProfileCard/Actions/DonateBtn/DonateBtn';
import Indicator from '../../ProfileCard/ProgressBar/Indicator/Indicator';
import ProgressBar from '../../ProfileCard/ProgressBar/ProgressBar';
import Button from '../../Button/Button';
import { UserCirclePlus } from '@phosphor-icons/react';
import styles from './DonateContent.module.css';
import Avatar from '../../Avatar/Avatar';
import DonateCloseBtn from './DonateCloseBtn/DonateCloseBtn';
import ActionBtn from '../../ProfileCard/Actions/ActionBtn/ActionBtn';

interface Props {
  tips: () => void;
  gift: () => void;
  adopted: boolean;
  userLevel: number;
  progress: number;
  userXp: number;
  adopt: () => void;
  avatar?: string;
  toggleDialog?: () => void;
}

const DonateContent = ({
  tips,
  gift,
  adopted,
  userLevel,
  progress,
  userXp,
  adopt,
  avatar,
  toggleDialog,
}: Props) => {
  return (
    <div className={styles.content}>
      <DonateCloseBtn onClick={toggleDialog} />
      <div className={styles.topSection}>
        <Avatar size="small" img={avatar} />
      </div>
      <div className={styles.indicators}>
        <Indicator state={userLevel >= 1 ? 'active' : 'static'} type="first" />{' '}
        <Indicator state={userLevel >= 2 ? 'active' : 'static'} type="second" />{' '}
        <Indicator state={userLevel >= 3 ? 'active' : 'static'} type="third" />
      </div>
      <ProgressBar progress={progress} userXp={userXp} userLevel={userLevel} />
      <div className={styles.actions}>
        {adopted ? (
          <>
            <DonateBtn onClick={tips} type="tips" />
            <DonateBtn onClick={gift} type="gift" />
            <ActionBtn
              title="Wishlist"
              subtitle="make dreams happen"
              type="wishlist"
            />
          </>
        ) : (
          <Button
            onClick={() => {
              adopt();
            }}
            title="Adopt Creator"
          >
            <UserCirclePlus size={20} weight="fill" /> Adopt Creator
          </Button>
        )}
      </div>
    </div>
  );
};

export default DonateContent;
