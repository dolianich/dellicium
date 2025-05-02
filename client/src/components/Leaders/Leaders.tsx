import styles from './Leaders.module.css';
import Leader from './Leader/Leader';
import elenathestar from '../../storage/elenathestar.jpg';
import liamthebold from '../../storage/liamthebold.jpg';
import sophiaspark from '../../storage/sophiaspark.jpg';
import noahontheego from '../../storage/noahonthego.jpg';
import bellavibes from '../../storage/bellavibes.jpg';
import ethanedge from '../../storage/ethanedge.jpg';
import miainmotion from '../../storage/miainmotion.jpg';

const Leaders = () => {
  const leaders = [
    {
      name: 'Elena Martinez',
      avatar: elenathestar,
      points: 1000,
      place: 1,
      position: 'up',
    },
    {
      name: 'Liam Connor',
      avatar: liamthebold,
      points: 900,
      place: 2,
      position: 'down',
    },
    {
      name: 'Sophia Patel',
      avatar: sophiaspark,
      points: 800,
      place: 3,
      position: 'up',
    },
    {
      name: 'Noah Thompson',
      avatar: noahontheego,
      points: 700,
      place: 4,
      position: 'down',
    },
    {
      name: 'Isabella Kim',
      avatar: bellavibes,
      points: 600,
      place: 5,
      position: 'up',
    },
    {
      name: 'Ethan Nguyen',
      avatar: ethanedge,
      points: 500,
      place: 6,
      position: 'down',
    },
    {
      name: 'Mia Johnson',
      avatar: miainmotion,
      points: 400,
      place: 7,
      position: 'up',
    },
  ];

  return (
    <div className={styles.container}>
      {leaders.map((leader) => (
        <Leader
          name={leader.name}
          avatar={leader.avatar}
          points={leader.points}
          place={leader.place}
          position={leader.position}
        />
      ))}
    </div>
  );
};

export default Leaders;
