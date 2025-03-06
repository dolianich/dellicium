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
import { useState } from 'react';

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

  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className={styles.hideArea} onClick={() => setVisible(!visible)} />

      <button
        onClick={handleMute}
        className={visible ? styles.muteBtn : styles.muteBtnHide}
      >
        {mute ? (
          <SpeakerSlash weight="fill" size={20} />
        ) : (
          <SpeakerHigh weight="fill" size={20} />
        )}
      </button>

      <div
        className={
          visible && playing ? styles.progressContainer : styles.progressContainerHide
        }
      >
        <div className={styles.duration}>
          <p className={styles.playedSeconds}>{formatTime(playedSeconds!)}</p>
          <p className={styles.loadedSeconds}>{formatTime(loadedSeconds!)}</p>
        </div>
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
      </div>

      <button
        className={visible ? styles.playBtn : styles.playBtnHide}
        onClick={handlePlay}
      >
        {playing ? (
          <Pause weight="fill" size={20} />
        ) : (
          <Play weight="fill" size={20} />
        )}
      </button>

      <div style={{ display: 'none' }}>
        <div className={styles.duration}>
          <p className={styles.playedSeconds}>{formatTime(playedSeconds!)}</p>
          <p className={styles.loadedSeconds}>{formatTime(loadedSeconds!)}</p>
        </div>

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
          <div className={styles.topControls}>
            <button onClick={handleMute} className={styles.controlBtn}>
              {mute ? (
                <SpeakerSlash weight="fill" size={20} />
              ) : (
                <SpeakerHigh weight="fill" size={20} />
              )}
            </button>

            <button onClick={handlePlay} className={styles.controlBtn}>
              {playing ? (
                <Pause weight="fill" size={20} />
              ) : (
                <Play weight="fill" size={20} />
              )}
            </button>

            <button onClick={handleScreenSize} className={styles.controlBtn}>
              {fullScreen ? (
                <CornersIn weight="fill" size={20} />
              ) : (
                <CornersOut weight="fill" size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoControls;
