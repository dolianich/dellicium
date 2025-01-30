import { SealCheck, Fire, Medal } from '@phosphor-icons/react';
import styles from './Badge.module.css';

interface Props {
  type?: string;
}

const Badge = ({ type }: Props) => {
  const badgeType = type ? styles[type] : styles.verified;
  return (
    <div className={badgeType}>
      {type === 'verified' ? (
        <SealCheck size={16} weight="regular" />
      ) : type === 'new' ? (
        <Fire size={16} weight="regular" />
      ) : (
        <Medal size={16} weight="regular" />
      )}
      <p>{type}</p>
    </div>
  );
};

export default Badge;
