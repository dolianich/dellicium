import styles from './VideoControls.module.css';
import { Play, Pause } from '@phosphor-icons/react';

interface Props {
  handlePlay?: () => void;
  handleMute?: () => void;
  handleScreenSize?: () => void;
  handleProgressTrack: (e: string) => void;
  fullScreen?: boolean;
  playing?: boolean;
  mute?: boolean;
  loadedSeconds?: number;
  playedSeconds?: number;
}

const VideoControls = ({
  handlePlay,
  handleMute,
  handleScreenSize,
  fullScreen,
  playing,
  mute,
  loadedSeconds,
  playedSeconds,
  handleProgressTrack,
}: Props) => {
  return (
    <>
      <button className={styles.playBtn} onClick={handlePlay}>
        {playing ? <Pause weight='fill' size={20}/> : <Play weight='fill' size={20}/>}
      </button>
      <div className={styles.controls}>
        <button onClick={handleScreenSize}>{fullScreen ? 'H' : 'S'}</button>
        <button onClick={handleMute}>{mute ? 'unmute' : 'mute'}</button>
        <input
          type="range"
          min={0}
          max={loadedSeconds}
          value={playedSeconds}
          step={1}
          onChange={(e) => handleProgressTrack(e.target.value)}
        />
        <p>{playedSeconds}</p>
        <p>{loadedSeconds}</p>
      </div>
    </>
  );
};

export default VideoControls;
