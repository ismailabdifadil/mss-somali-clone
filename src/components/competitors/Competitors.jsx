import styles from './competitors.module.scss';
import Competitor from '../competitor/Competitor';
import { useSelector } from 'react-redux';
const Competitors = () => {
  const { competitors } = useSelector((store) => store.competitor);
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
        {competitors.map((competitor) => (
          <Competitor key={competitor.Id} competitor={competitor} />
        ))}
      </div>
    </div>
  );
};

export default Competitors;
