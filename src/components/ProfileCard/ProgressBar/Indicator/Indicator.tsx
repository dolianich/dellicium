import styles from './Indicator.module.css';
import { Diamond, Pentagon, Hexagon } from '@phosphor-icons/react';

interface Props {
  type?: string;
  color?: string;
}

const Indicator = ({ type, color }: Props) => {
  return (
    <div className={styles.container}>
      {type === 'diamond' ? (
        <Diamond size={20} weight="fill" color={color}/>
      ) : type === 'pentagon' ? (
        <Pentagon size={20} weight="fill" color={color}/>
      ) : (
        <Hexagon size={20} weight="fill" color={color}/>
      )}
    </div>
  );
};

export default Indicator;
