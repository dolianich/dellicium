import {
  Pepper,
  MusicNotes,
  BoundingBox,
  Sparkle,
  Joystick,
  GraduationCap,
  PersonSimpleRun,
  ShirtFolded,
  PaintBrush,
  Dress,
  Code,
  Camera
} from '@phosphor-icons/react';
import styles from './Badge.module.css';

interface Props {
  type?: string;
}

const Badge = ({ type }: Props) => {
  return (
    <div className={styles.badge}>
      {type === 'nsfw' ? (
        <Pepper size={16} weight="regular" />
      ) : type === 'music' ? (
        <MusicNotes size={16} weight="regular" />
      ) : type === 'design' ? (
        <BoundingBox size={16} weight="regular" />
      ) : type === 'ai' ? (
        <Sparkle size={16} weight="regular" />
      ) : type === 'gaming' ? (
        <Joystick size={16} weight="regular" />
      ) : type === 'education' ? (
        <GraduationCap size={16} weight="regular" />
      ) : type === 'fitness' ? (
        <PersonSimpleRun size={16} weight="regular" />
      ) : type === 'business' ? (
        <ShirtFolded size={16} weight="regular" />
      ) : type === 'art' ? (
        <PaintBrush size={16} weight="regular" />
      ) : type === 'fashion' ? (
        <Dress size={16} weight="regular" />
      ) : type === 'technology' ? (
        <Code size={16} weight="regular" />
      ) : type === 'content' ? (
        <Camera size={16} weight="regular" />
      ) : (
        <></>
      )}
      <p className={styles.text}>{type}</p>
    </div>
  );
};

export default Badge;
