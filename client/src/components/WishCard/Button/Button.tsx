import styles from './Button.module.css';

interface Props {
  type?: 'primary' | 'secondary';
  title?: string
}

const Button = ({ type, title }: Props) => {
  return (
    <button
      className={type === 'secondary' ? styles.btnSecondary : styles.btnPrimary}
    >
      {title}
    </button>
  );
};

export default Button;
