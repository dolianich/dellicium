import styles from './PostLock.module.css';
import Indicator from '../../ProfileCard/ProgressBar/Indicator/Indicator';

interface Props{
    requiredLevel: number,
}

const PostLock = ({requiredLevel}: Props) => {
  return (
    <div className={styles.postLock}>
          <p className={styles.requiredText}>required level:</p>
          <Indicator
            state="active"
            type={
              requiredLevel === 1
                ? 'first'
                : requiredLevel === 2
                ? 'second'
                : requiredLevel === 3
                ? 'third'
                : ''
            }
          />
        </div>
  )
}

export default PostLock
