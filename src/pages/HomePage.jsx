import Competitors from '../components/competitors/Competitors';
import Footer from '../components/Footer/Footer';
import Time from '../components/Timer/Time';
const HomePage = () => {
  return (
    <div>
      <Time />
      <Competitors isHome={true} />
      <Footer/>
    </div>
  );
};

export default HomePage;
