import styles from './competitors.module.scss';
import Competitor from '../competitor/Competitor';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Competitors = ({ isHome }) => {
  const { competitors } = useSelector((store) => store.competitor);
  const [showAll, setShowAll] = useState(false);
  const compters = competitors.slice(0, 6);
  return (
    <div className={styles.competitors_container}>
      <div className={styles.competitors_header}>
        <h1>Miss Somali</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe et
          harum minus incidunt neque distinctio quae ducimus quos laborum{' '}
        </p>
      </div>
      <div className={styles.competitors}>
        {isHome && !showAll
          ? compters.map((competitor) => (
              <Competitor key={competitor.Id} competitor={competitor} />
            ))
          : competitors.map((competitor) => (
              <Competitor key={competitor.Id} competitor={competitor} />
            ))}
      </div>
      {isHome && (
        <button
          className={styles.show_all}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      )}
    </div>
  );
};

export default Competitors;
