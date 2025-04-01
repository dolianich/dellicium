import styles from './styles/Page.module.css';
import Development from '../components/Development/Development';

const NotificationsPage = () => {
  return (
    <div className={styles.page}>
      <Development></Development>
    </div>
  );
};

export default NotificationsPage;
