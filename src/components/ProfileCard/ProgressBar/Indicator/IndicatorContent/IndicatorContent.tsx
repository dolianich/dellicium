import styles from './IndicatorContent.module.css';
import first_static from '../../../../../assets/indicators/1st/1st_static.svg';
import first_active from '../../../../../assets/indicators/1st/1st.json';
import second_static from '../../../../../assets/indicators/2nd/2nd_static.svg';
import second_active from '../../../../../assets/indicators/2nd/2nd.json';
import third_static from '../../../../../assets/indicators/3rd/3rd_static.svg';
import third_active from '../../../../../assets/indicators/3rd/3rd.json';
import Lottie from 'lottie-react';

interface Props {
  state: string;
  type: string;
}

const IndicatorContent = ({ state, type }: Props) => {
  const indicators = [
    { level: 1, static: first_static, active: first_active },
    { level: 2, static: second_static, active: second_active },
    { level: 3, static: third_static, active: third_active },
  ];

  return (
    <div className={styles.wrapper}>
      {state === 'static' ? (
        <img
          src={
            type === 'first'
              ? indicators[0].static
              : type === 'second'
              ? indicators[1].static
              : indicators[2].static
          }
          alt="level"
          className={styles.content}
        />
      ) : (
        <Lottie
          animationData={
            type === 'first'
              ? indicators[0].active
              : type === 'second'
              ? indicators[1].active
              : indicators[2].active
          }
          className={styles.content}
        />
      )}
    </div>
  );
};

export default IndicatorContent;
