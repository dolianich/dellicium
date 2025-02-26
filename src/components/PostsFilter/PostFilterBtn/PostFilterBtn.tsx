import styles from './PostFilterBtn.module.css';

interface Props{
    children?: React.ReactNode;
}

const PostFilterBtn = ({children}: Props) => {
  return (
    <button className={styles.btn}>{children}</button>
  )
}

export default PostFilterBtn
