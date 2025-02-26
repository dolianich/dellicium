import styles from './Description.module.css';
import { truncateText } from '../../../utils/truncateText';

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
        {truncateText(descriptionText!, 80)}
      </p>
    </div>
  );
};

export default Description;
