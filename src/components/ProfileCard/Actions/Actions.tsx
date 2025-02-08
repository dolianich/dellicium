import styles from './Actions.module.css';
import DonateBtn from './DonateBtn/DonateBtn';
import ActionBtn from './ActionBtn/ActionBtn';
import ActionBtnSm from './ActionBtnSm/ActionBtnSm';

const Actions = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.actions}>actions</h2>
      <div className={styles.donations}>
        <DonateBtn type="tips" /> <DonateBtn type="gift" />
      </div>
      <div className={styles.actionsBtns}>
        <ActionBtn title="custom" subtitle="custom content request" />{' '}
        <ActionBtn title="mini-game" subtitle="level up your creator" />
      </div>
      <div className={styles.actionsSm}>
        <ActionBtnSm type="Challenges" /> <ActionBtnSm type="Rewards" />{' '}
        <ActionBtnSm type="About" />
      </div>
    </div>
  );
};

export default Actions;
