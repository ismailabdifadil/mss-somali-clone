import styles from './Timer.module.scss';
const Time = ({days,hours,minutes,seconds}) => {
  return (
    <div>
      <div className={styles.countdown}>
        <h1>VOTING ENDS IN </h1>
        <div className={styles.time}>
          <div className={styles.digit_text}>
            <span className={styles.digit}>
              {days < 10 ? `0${days}` : days} :
            </span>
            <span className={styles.text}>Days</span>
          </div>
          <div className={styles.digit_text}>
            <span className={styles.digit}>
              {hours < 10 ? `0${hours}` : hours} :
            </span>
            <span className={styles.text}>Hours</span>
          </div>
          <div className={styles.digit_text}>
            <span className={styles.digit}>
              {minutes < 10 ? `0${minutes}` : minutes} :
            </span>
            <span className={styles.text}>Minutes</span>
          </div>
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
