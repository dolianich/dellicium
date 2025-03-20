import styles from './BackBtn.module.css';
import { CaretLeft } from '@phosphor-icons/react';

interface Props{
    onClick?: () => void;
}

const BackBtn = ({onClick}: Props) => {
  return (
    <button className={styles.btn} onClick={onClick}><CaretLeft weight='regular' size={20} /></button>
  )
}

export default BackBtn
