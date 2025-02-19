import styles from './Actions.module.css';
import DonateBtn from './DonateBtn/DonateBtn';
import ActionBtn from './ActionBtn/ActionBtn';
import ActionBtnSm from './ActionBtnSm/ActionBtnSm';
import { CaretUp } from '@phosphor-icons/react';
import { useState } from 'react';

interface Props {
  tips: () => void;
  gift: () => void;
}

const Actions = ({ tips, gift }: Props) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.actionsDropdown}>
        <h2 className={styles.actions}>actions</h2>
        <CaretUp
          size={20}
          weight="regular"
          className={visible ? styles.arrowIcon : styles.arrowIconDown}
          onClick={() => setVisible(!visible)}
        />
      </div>
      <div className={visible ? styles.section : styles.sectionHide}>
        <div className={styles.donations}>
          <DonateBtn onClick={tips} type="tips" />{' '}
          <DonateBtn onClick={gift} type="gift" />
        </div>
        <div className={styles.secondary}>
          <div className={styles.actionsBtns}>
            <ActionBtn
              title="Custom"
              subtitle="custom content request"
              type="custom"
            />{' '}
            <ActionBtn
              title="Mini-Game"
              subtitle="level up your creator"
              type="game"
            />
          </div>
          <div className={styles.actionsSm}>
            <ActionBtnSm type="Challenges" /> <ActionBtnSm type="Rewards" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
