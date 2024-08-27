import Countdown from 'react-countdown';
import Time from './Time';
import { useDispatch, useSelector } from 'react-redux';

const Timer = () => {
  const dispatch = useDispatch();
  const timeLeft = useSelector((state) => state.timer.timeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(decrement());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  // Convert timeLeft from seconds to days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  const Completion = () => <span>You are good to go!</span>;
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completion />;
    } else {
      // Render a countdown
      return (
        <Time days={days} hours={hours} minutes={minutes} seconds={seconds} />
      );
    }
  };

  return (
    <div>
      <Countdown date={Date.now() + timeLeft} renderer={renderer} />
    </div>
  );
};

export default Timer;
