import styles from './Stat.module.css';
import { Icon } from '@phosphor-icons/react';

interface Props {
  icon: Icon;
  type?: string;
  value?: number
}

const Stat = ({ icon: Icon, type, value }: Props) => {
  return (
    <div className={type === 'secondary' ? styles.statSecondary : styles.stat}>
      <Icon size={20} weight="regular" />
      <p className={styles.number}>{value}</p>
    </div>
  );
};

export default Stat;
