import styles from './Indicator.module.css';
import { Heart } from '@phosphor-icons/react';

const Indicator = () => {
  return (
    <div className={styles.container}>
      <Heart size={20} weight='fill' color='#BBFCDC'/>
    </div>
  )
}

export default Indicator
