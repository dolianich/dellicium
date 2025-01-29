import { SealCheck } from '@phosphor-icons/react';
import styles from './Badge.module.css';

const Badge = () => {
  return (
    <div className={styles.badge}>
      <SealCheck size={16} weight="regular" />
      <p>verified</p>
    </div>
  );
};

export default Badge;
