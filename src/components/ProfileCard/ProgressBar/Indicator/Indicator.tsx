import styles from './Indicator.module.css';
import IndicatorContent from './IndicatorContent/IndicatorContent';

interface Props {
  state: string;
  type: string;
}

const Indicator = ({ state, type }: Props) => {
  return (
    <div className={styles.container}>
      <IndicatorContent state={state} type={type} />
    </div>
  );
};

export default Indicator;
