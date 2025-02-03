import styles from './Stats.module.css';

interface Props {
  value: number;
  subtitle: string;
  type?: 'center' | 'left';
}

const Stats = ({ value, subtitle, type }: Props) => {
  return (
    <div className={type === 'left' ? styles.statsLeft : styles.statsCenter}>
      <h3 className={styles.value}>{value}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default Stats;
