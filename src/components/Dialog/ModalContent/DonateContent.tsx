import DonateBtn from '../../ProfileCard/Actions/DonateBtn/DonateBtn';
import Indicator from '../../ProfileCard/ProgressBar/Indicator/Indicator';
import ProgressBar from '../../ProfileCard/ProgressBar/ProgressBar';
import Button from '../../Button/Button';
import { UserCirclePlus } from '@phosphor-icons/react';
import styles from './DonateContent.module.css';

interface Props {
  tips: () => void;
  gift: () => void;
  adopted: boolean;
  userLevel: number;
  progress: number;
  userXp: number;
  adopt: () => void;
}

const DonateContent = ({
  tips,
  gift,
  adopted,
  userLevel,
  progress,
  userXp,
  adopt,
}: Props) => {
  return (
    <>
      {adopted ? (
        <div>
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
          <DonateBtn onClick={tips} type="tips" />
          <DonateBtn onClick={gift} type="gift" />
        </div>
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
    </>
  );
};

export default DonateContent;
