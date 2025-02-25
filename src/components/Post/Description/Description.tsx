import styles from './Description.module.css';

interface Props {
  type?: string;
  descriptionText?: string;
}

const Description = ({ type, descriptionText }: Props) => {
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
        {descriptionText}
      </p>
    </div>
  );
};

export default Description;
