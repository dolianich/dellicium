import styles from './Actions.module.css';
import DonateBtn from './DonateBtn/DonateBtn';
import ActionBtn from './ActionBtn/ActionBtn';
import ActionBtnSm from './ActionBtnSm/ActionBtnSm';


interface Props {
  tips: () => void;
  gift: () => void;
}

const Actions = ({ tips, gift,}: Props) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.actions}>actions</h2>
      <div className={styles.section}>
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
