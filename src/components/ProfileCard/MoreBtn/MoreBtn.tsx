import styles from './MoreBtn.module.css';
import { DotsThree } from '@phosphor-icons/react';

const MoreBtn = () => {
  return (
    <button className={styles.btn}><DotsThree size={20} /></button>
  )
}

export default MoreBtn
