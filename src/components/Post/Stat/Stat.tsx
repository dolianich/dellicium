import styles from './Stat.module.css';
import { Icon } from '@phosphor-icons/react';

interface Props {
  icon: Icon;
}

const Stat = ({ icon: Icon }: Props) => {
  return (
    <div className={styles.stat}>
      <Icon size={20} weight="regular" />
      <p className={styles.number}>999</p>
    </div>
  );
};

export default Stat;
