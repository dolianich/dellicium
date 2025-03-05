import styles from './VideoControls.module.css';
import {
  Play,
  Pause,
  CornersOut,
  CornersIn,
  SpeakerHigh,
  SpeakerSlash,
} from '@phosphor-icons/react';
import { formatTime } from '../../../../utils/formatTime';

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
  const progress =
    loadedSeconds! > 0 ? (playedSeconds! / loadedSeconds!) * 100 : 0;

  return (
    <>
      <button className={styles.playBtn} onClick={handlePlay}>
        {playing ? (
          <Pause weight="fill" size={20} />
        ) : (
          <Play weight="fill" size={20} />
        )}
      </button>
      <div className={styles.controls}>
        <input
          type="range"
          min={0}
          max={loadedSeconds}
          value={playedSeconds}
          step={0.000001}
          onChange={(e) => handleProgressTrack(e.target.value)}
          className={styles.progress}
          style={{
            background: `linear-gradient(to right, #BBFCDC ${progress}%, #111111 ${progress}%)`,
          }}
        />
        <div className={styles.bottom}>
          <div className={styles.duration}>
            <p className={styles.playedSeconds}>{formatTime(playedSeconds!)}</p>
            <p className={styles.playedSeconds}>/</p>
            <p className={styles.loadedSeconds}>{formatTime(loadedSeconds!)}</p>
          </div>

          <div className={styles.topControls}>
            <button onClick={handleMute} className={styles.controlBtn}>
              {mute ? (
                <SpeakerSlash weight="regular" size={16} />
              ) : (
                <SpeakerHigh weight="regular" size={16} />
              )}
            </button>
            <button onClick={handleScreenSize} className={styles.controlBtn}>
              {fullScreen ? (
                <CornersIn weight="regular" size={16} />
              ) : (
                <CornersOut weight="regular" size={16} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoControls;
