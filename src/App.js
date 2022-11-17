import Footer from './Components/Footer';
import './index.css';
import Banner from './Pages/Banner';
import FindSites from './Pages/FindSites';
import GetInTouch from './Pages/GetInTouch';
import Header from './Components/Navbar';
import Hero from './Pages/Hero';
import HowItWorks from './Pages/HowItWorks';
import Services from './Pages/Services';
import Navbar from './Components/Navbar';
import Login from './Auth/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Services />
        <HowItWorks />
        <FindSites />
        <Banner />
        <GetInTouch />
        <Footer />
        <Login/>
      </header>
    </div>
  );
}

export default App;
