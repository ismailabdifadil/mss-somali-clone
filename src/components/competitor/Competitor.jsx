import { MdHowToVote } from 'react-icons/md';
import styles from './competitor.module.scss';
import { useDispatch } from 'react-redux';
import { handleClick } from '../../features/modal/modalSlice';
import {  setCurrentCompetitor } from '../../features/competirors/competitorSlice';
const Competitor = ({ competitor }) => {
  const backgroundStyle = {
    width: '100%',
    background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${competitor.Photo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const dispatch = useDispatch();
  const voteNow = () => {
    dispatch(setCurrentCompetitor(competitor));
    dispatch(handleClick());
  };
  return (
    <div className={styles.competitor} style={backgroundStyle}>
      <div className={styles.info}>
        <span className={styles.name}>
          {competitor.FirstName + ' ' + competitor.LastName}
        </span>
        <span className={styles.state}>{competitor.RepresentingState}</span>
        <span className={styles.votes}>
          Total votes: {competitor.NumberofVotes}
        </span>
      </div>
      <div className={styles.vote_icon} onClick={voteNow}>
        <MdHowToVote color="#18181b" />
      </div>
    </div>
  );
};

export default Competitor;
