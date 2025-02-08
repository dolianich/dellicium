import styles from './Avatar.module.css';

interface Props {
  size?: 'small' | 'big';
  img?: string;
}

const Avatar = ({ size, img }: Props) => {
  return (
    <div className={size === 'small' ? styles.avatarSmall : styles.avatarBig}>
      <img src={img} alt="avatar" className={styles.img} />
    </div>
  );
};

export default Avatar;
