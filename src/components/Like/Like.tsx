import styles from './Like.module.css';
import { Heart } from '@phosphor-icons/react';
import { useState, useRef } from 'react';
import Lottie from 'lottie-react';
import likeAnim from '../../assets/animations/like.json';

const Like = () => {
  const [isLike, setIsLike] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  const animationRef = useRef(null);

  const like = () => {
    if (!isLike) {
      setPlayAnimation(true);
    }
    setIsLike(!isLike);
  };

  const handleAnimationComplete = () => {
    setPlayAnimation(false);
  };

  return (
    <div className={styles.container} onClick={like}>
      {playAnimation && (
        <Lottie
          animationData={likeAnim}
          loop={false}
          autoplay={true}
          onComplete={handleAnimationComplete}
          lottieRef={animationRef}
          style={{ width: '100%', height: '100%' }}
        />
      )}
      <Heart
        size={20}
        weight="fill"
        color={!isLike ? '#6E6E6E' : '#BBFCDC'}
        className={playAnimation ? styles.hidden : ''}
      />
    </div>
  );
};

export default Like;
