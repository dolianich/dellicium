import styles from './Description.module.css';
import { useState } from 'react';
import { truncateText } from '../../../utils/truncateText';

interface Props {
  type?: string;
  descriptionText?: string;
}

const Description = ({ type, descriptionText }: Props) => {
  const [isExpanded, setIsExpended] = useState(false);

  const displayText = isExpanded
    ? descriptionText
    : truncateText(descriptionText!, 60);

  const showButton = descriptionText!.length > 80;

  return (
    <div
      className={
        type === 'secondary'
          ? styles.descriptionContainerSecondary
          : type === 'third'
          ? styles.descriptionContainerThird
          : styles.descriptionContainer
      }
    >
      <p
        className={
          type === 'secondary'
            ? styles.descriptionSecondary
            : type === 'third'
            ? styles.descriptionThird
            : styles.description
        }
      >
        {displayText}
        {showButton && (
          <button
            onClick={() => setIsExpended(!isExpanded)}
            className={styles.expandBtn}
          >
            {isExpanded ? 'Hide' : 'More'}
          </button>
        )}
      </p>
    </div>
  );
};

export default Description;
