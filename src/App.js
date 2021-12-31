import './generics.css';
import Header from './components/Header';
import Main from './components/Main';
import PastLaunches from './components/PastLaunches';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Main>
        <PastLaunches />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
