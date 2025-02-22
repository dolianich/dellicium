import styles from './Avatar.module.css';

interface Props {
  size?: 'small' | 'big' | 'xs';
  img?: string;
}

const Avatar = ({ size, img }: Props) => {
  return (
    <div
      className={
        size === 'small'
          ? styles.avatarSmall
          : size === 'xs'
          ? styles.avatarXs
          : styles.avatarBig
      }
    >
      <img src={img} alt="avatar" className={styles.img} />
    </div>
  );
};

export default Avatar;
