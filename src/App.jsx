import Competitors from './components/competitors/Competitors';
import Header from './components/Header/Header';
import VoteModal from './components/modal/VoteModal';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <>
      <Header />
      <Timer />
      <Competitors />
      <VoteModal />
    </>
  );
}

export default App;
