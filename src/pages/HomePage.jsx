import Competitors from '../components/competitors/Competitors';
import Footer from '../components/Footer/Footer';
import VoteModal from '../components/modal/VoteModal';
import Time from '../components/Timer/Time';
const HomePage = () => {
  return (
    <div>
      <Time />
      <Competitors isHome={true} />
      <VoteModal />
      <Footer />
    </div>
  );
};

export default HomePage;
