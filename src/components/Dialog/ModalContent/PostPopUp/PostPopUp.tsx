import styles from './PostPopUp.module.css';
import Media from '../../../Post/Media/Media';

interface Props {
  src?: string;
  isLocked: boolean;
  type?: string;
  contentType: 'image' | 'video';
}

const PostPopUp = ({ src, isLocked, type, contentType }: Props) => {
  return (
    <div>
      <Media
        src={src}
        isLocked={isLocked}
        type={type}
        contentType={contentType}
      />
    </div>
  );
};

export default PostPopUp;
