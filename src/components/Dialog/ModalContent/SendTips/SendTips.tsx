import styles from './SendTips.module.css';

interface Props {
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendTips: (inputValue: string) => void;
}

const SendTips = ({ inputValue, handleInputChange, sendTips }: Props) => {
  return (
    <div className={styles.container}>
      <input
        id="number-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={() => sendTips(inputValue)}>
        Donate
      </button>
    </div>
  );
};

export default SendTips;
