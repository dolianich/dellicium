import Button from '../../Button/Button';
import { UserCirclePlus } from '@phosphor-icons/react';
import styles from './DonateContent.module.css';
import Avatar from '../../Avatar/Avatar';
import DonateCloseBtn from './DonateCloseBtn/DonateCloseBtn';
import Indicator from '../../ProfileCard/ProgressBar/Indicator/Indicator';
import ProgressBar from '../../ProfileCard/ProgressBar/ProgressBar';
import DonateActBtn from './DonateActBtn/DonateActBtn';

interface Props {
  tips: () => void;
  gift: () => void;
  adopted: boolean;
  userLevel: number;
  name?: string;
  adopt: () => void;
  avatar?: string;
  toggleDialog?: () => void;
  userXp: number;
  progress: number;
}

const DonateContent = ({
  tips,
  gift,
  adopted,
  name,
  adopt,
  avatar,
  toggleDialog,
  userLevel,
  userXp,
  progress,
}: Props) => {
  return (
    <div className={styles.content}>
      <DonateCloseBtn onClick={toggleDialog} />
      <div className={styles.topSection}>
        <Avatar size="small" img={avatar} />
      </div>
      <h3 className={styles.name}>{name?.toLowerCase()}</h3>
      <div className={styles.actions}>
        {adopted ? (
          <>
            <div className={styles.indicators}>
              <Indicator
                state={userLevel >= 1 ? 'active' : 'static'}
                type="first"
              />{' '}
              <Indicator
                state={userLevel >= 2 ? 'active' : 'static'}
                type="second"
              />{' '}
              <Indicator
                state={userLevel >= 3 ? 'active' : 'static'}
                type="third"
              />
            </div>
            <ProgressBar
              progress={progress}
              userXp={userXp}
              userLevel={userLevel}
            />
            <div className={styles.actionBtns}>
              <DonateActBtn text="Send Tips" type="tips" onClick={tips} />
              <DonateActBtn text="NFT Gift" type="gift" onClick={gift} />
              <DonateActBtn text="Wishlist" type="wishlist" />
            </div>
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
