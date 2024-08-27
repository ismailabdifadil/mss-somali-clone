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
        {isHome
          ? compters.map((competitor) => (
              <Competitor key={competitor.Id} competitor={competitor} />
            ))
          : competitors.map((competitor) => (
              <Competitor key={competitor.Id} competitor={competitor} />
            ))}
      </div>
      {isHome && (
        <Link to="/competitors">
          <button className={styles.show_all}>Show All</button>
        </Link>
      )}
    </div>
  );
};

export default Competitors;
