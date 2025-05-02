import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'onlyIcon' | 'delete';

interface Props {
  title: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ title, variant, children, onClick }: Props) => {
  const buttonClass = variant ? styles[variant] : styles.primary;
  return (
    <button onClick={onClick} title={title} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
