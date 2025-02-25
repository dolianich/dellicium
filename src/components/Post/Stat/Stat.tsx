import styles from './Stat.module.css';
import { Icon } from '@phosphor-icons/react';

interface Props {
  icon: Icon;
  type?: string;
}

const Stat = ({ icon: Icon, type }: Props) => {
  return (
    <div className={type === 'secondary' ? styles.statSecondary : styles.stat}>
      <Icon size={20} weight="regular" />
      <p className={styles.number}>999</p>
    </div>
  );
};

export default Stat;
