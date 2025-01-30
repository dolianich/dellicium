import styles from './Title.module.css';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return <h1 className={styles.title}>{title.toLowerCase()}</h1>;
};

export default Title;
