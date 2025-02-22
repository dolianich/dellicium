import styles from './Post.module.css';
import Avatar from '../Avatar/Avatar';

interface Props{
    avatar?: string;
}

const Post = ({avatar}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.media}>
        
      </div>
      <div className={styles.elements}>
        <Avatar size='xs' img={avatar}/>
      </div>
    </div>
  )
}

export default Post
