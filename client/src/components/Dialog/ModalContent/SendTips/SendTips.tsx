import styles from './SendTips.module.css';
import { CaretLeft, HandCoins } from '@phosphor-icons/react';
import solLogo from '../../../../assets/solLogo.svg';

interface Props {
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendTips: (inputValue: string) => void;
  back: () => void;
  tipError: boolean;
}

const SendTips = ({
  inputValue,
  handleInputChange,
  sendTips,
  back,
  tipError,
}: Props) => {
  
  return (
    <form className={styles.container} onSubmit={() => sendTips(inputValue)}>
      <div className={styles.inputArea}>
        <input
          id="number-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={!tipError ? styles.input : styles.inputError}
          placeholder="Enter amount"
          inputMode="decimal"
        />
        <div className={styles.sol}>
          <img src={solLogo} alt="sol" className={styles.logo} />
          <p className={styles.solText}>SOL</p>
        </div>
      </div>
      <button
        type={inputValue ? 'submit' : 'button'}
        className={styles.donateBtn}
      >
        <HandCoins weight="fill" size={20} />
        Donate
      </button>
      <button onClick={back} className={styles.backBtn}>
        <CaretLeft weight="regular" size={20} />
      </button>
    </form>
  );
};

export default SendTips;
