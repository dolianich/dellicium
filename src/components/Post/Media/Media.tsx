import styles from './Media.module.css';
import ReactPlayer from 'react-player';
import VideoControls from './VideoControls/VideoControls';
import { useState, useRef } from 'react';
import screenfull from 'screenfull';

interface Props {
  src?: string;
  isLocked: boolean;
  type?: string;
  contentType: 'image' | 'video';
}

const Media = ({ src, isLocked, type, contentType }: Props) => {
  const [videoControls, setVideoControls] = useState({
    playing: false,
    mute: false,
    fullScreen: false,
    loadedSeconds: 1,
    playedSeconds: 0,
  });

  const { playing, mute, fullScreen, loadedSeconds, playedSeconds } =
    videoControls;

  const refPlayer = useRef<ReactPlayer | null>(null);
  const refPlayerContainer = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    setVideoControls({ ...videoControls, playing: !videoControls.playing });
  };

  const handleMute = () => {
    setVideoControls({ ...videoControls, mute: !videoControls.mute });
  };

  const handleScreenSize = () => {
    if (refPlayerContainer.current && screenfull.isEnabled) {
      screenfull.toggle(refPlayerContainer.current);
      setVideoControls({
        ...videoControls,
        fullScreen: !videoControls.fullScreen,
      });
    }
  };

  const handleProgress = (e: object) => {
    setVideoControls({ ...videoControls, ...e });
  };

  const handleProgressTrack = (e: string) => {
    refPlayer.current!.seekTo(Number(e));
  };

  return (
    <div className={`${styles.media} ${isLocked ? styles.mediaLocked : ''}`}>
      {contentType === 'image' ? (
        <img
          src={src}
          alt="post"
          className={
            type === 'secondary' ? styles.contentSecondary : styles.content
          }
        />
      ) : contentType === 'video' ? (
        <div ref={refPlayerContainer} className={styles.videoWrapper}>
          <VideoControls
            handlePlay={handlePlay}
            handleMute={handleMute}
            fullScreen={fullScreen}
            playing={playing}
            mute={mute}
            loadedSeconds={loadedSeconds}
            playedSeconds={playedSeconds}
            handleProgressTrack={handleProgressTrack}
            handleScreenSize={handleScreenSize}
          />
          <ReactPlayer
            playing={playing}
            url={src}
            controls={false}
            width={'100%'}
            height={'auto'}
            loop
            muted={mute}
            ref={refPlayer}
            onProgress={handleProgress}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Media;
