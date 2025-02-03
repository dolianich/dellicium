import styles from './Avatar.module.css';
import modelAvatar from '../../assets/user_test.png';

interface Props{
    size?: 'small' | 'big'
}

const Avatar = ({size}: Props) => {
  return (
    <img src={modelAvatar} alt="avatar" className={size === 'small' ? styles.small : styles.big}/>
  )
}

export default Avatar
