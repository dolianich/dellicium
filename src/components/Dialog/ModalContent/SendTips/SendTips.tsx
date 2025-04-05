import styles from './SendTips.module.css';
import { CaretLeft, HandCoins } from '@phosphor-icons/react';

interface Props {
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendTips: (inputValue: string) => void;
  back: () => void;
}

const SendTips = ({ inputValue, handleInputChange, sendTips, back }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputArea}>
        <input
          id="number-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
          placeholder="Enter amount"
        />
        <div className={styles.sol}></div>
      </div>
      <button
        type="submit"
        onClick={() => sendTips(inputValue)}
        className={styles.donateBtn}
      >
        <HandCoins weight="fill" size={20} />
        Donate
      </button>
      <button onClick={back} className={styles.backBtn}>
        <CaretLeft weight="regular" size={20} />
      </button>
    </div>
  );
};

export default SendTips;
