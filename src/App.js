import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import ServiceSection from './components/Service/ServiceSection';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ServiceSection />
    </>
  );
}

export default App;
