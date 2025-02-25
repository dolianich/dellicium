import styles from './PostSecondary.module.css';
import img from '../../assets/post_test_img.png';
import Author from './Author/Author';
import Media from './Media/Media';

interface Props {
  avatar?: string;
  name?: string;
  userLevel: number;
  requiredLevel: number;
}

const PostSecondary = () => {
  return (
    <div className={styles.wrapper}>
      <Author />
      <div>
        <Media img={img} />
      </div>
    </div>
  );
};

export default PostSecondary;
