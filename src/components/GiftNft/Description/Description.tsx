import styles from './Description.module.css';

interface Props {
  description?: string;
}

const Description = ({ description }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Description;
