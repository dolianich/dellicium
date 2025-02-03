import styles from './Avatar.module.css';

interface Props{
    size?: 'small' | 'big',
    img?: string
}

const Avatar = ({size, img}: Props) => {
  return (
    <img src={img} alt="avatar" className={size === 'small' ? styles.small : styles.big}/>
  )
}

export default Avatar
