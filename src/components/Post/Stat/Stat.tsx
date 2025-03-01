import styles from './Stat.module.css';
import { Icon } from '@phosphor-icons/react';
import { formatPoints } from '../../../utils/formatPoints';

interface Props {
  icon: Icon;
  type?: string;
  value?: number;
}

const Stat = ({ icon: Icon, type, value }: Props) => {
  return (
    <div className={type === 'secondary' ? styles.statSecondary : styles.stat}>
      <button className={type === 'secondary' ? styles.btn : styles.btnDesktop}>
        <Icon
          size={20}
          weight={type === 'secondary' ? 'fill' : 'regular'}
          color={type === 'secondary' ? '#6E6E6E' : '#F4F6FE'}
        />
      </button>

      <p className={styles.number}>{formatPoints(value!)}</p>
    </div>
  );
};

export default Stat;
