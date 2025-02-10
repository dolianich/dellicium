import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary'

interface Props {
  title: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button = ({ title, variant, children }: Props) => {
  const buttonClass = variant ? styles[variant] : styles.primary
  return <button title={title} className={buttonClass}>{children}</button>;
};

export default Button;
