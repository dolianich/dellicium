import styles from './PostFilterBtn.module.css';

interface Props {
  children?: React.ReactNode;
  onFilterChange: (filter: string) => void;
  id: string;
}

const PostFilterBtn = ({ children, onFilterChange, id}: Props) => {
  return (
    <button onClick={() => onFilterChange(id)} className={styles.btn}>
      {children}
    </button>
  );
};

export default PostFilterBtn;
