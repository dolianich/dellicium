import styles from './Description.module.css';

interface Props {
  type?: string;
}

const Description = ({ type }: Props) => {
  return (
    <div
      className={
        type === 'secondary'
          ? styles.descriptionContainerSecondary
          : styles.descriptionContainer
      }
    >
      <p
        className={
          type === 'secondary'
            ? styles.descriptionSecondary
            : styles.description
        }
      >
        text text text text text text text text text text text text text text
      </p>
    </div>
  );
};

export default Description;
