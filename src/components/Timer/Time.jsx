import { useDispatch, useSelector } from 'react-redux';
import styles from './Timer.module.scss';
import { decrease } from '../../features/timer/TimerSlice';
import { useEffect } from 'react';
const Time = () => {
  const dispatch = useDispatch();
  const timeLeft = useSelector((state) => state.timer.timeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(decrease());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  // Convert timeLeft from seconds to days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <div className={styles.countdown}>
        <h1>VOTING ENDS IN </h1>
        <div className={styles.time}>
          <div className={styles.digit_text}>
            <span className={styles.digit}>
              {days < 10 ? `0${days}` : days}
            </span>
            <span className={styles.text}>Days</span>
          </div>
          <hr className={styles.divider} />
          <div className={styles.digit_text}>
            <span className={styles.digit}>
              {hours < 10 ? `0${hours}` : hours}
            </span>
            <span className={styles.text}>Hours</span>
          </div>
          <hr className={styles.divider} />
          <div className={styles.digit_text}>
            <span className={styles.digit}>
              {minutes < 10 ? `0${minutes}` : minutes}
            </span>
            <span className={styles.text}>Minutes</span>
          </div>
          <hr className={styles.divider} />
          <div className={styles.digit_text}>
            <span className={styles.digit}>
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
            <span className={styles.text}>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
