import styles from './SendTips.module.css';

interface Props {
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SendTips = ({ inputValue, handleInputChange }: Props) => {
  return (
    <div className={styles.container}>
      <input
        id="number-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={() => console.log(inputValue)}>Donate</button>
    </div>
  );
};

export default SendTips;
