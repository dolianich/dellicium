import styles from './ProgressBar.module.css';



const ProgressBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.progressBar} style={{width: '50%'}}></div>
    </div>
  )
}

export default ProgressBar
