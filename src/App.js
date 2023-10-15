import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ServiceSection from "./components/Service/ServiceSection";
import FutureReady from "./components/FutureReady/FutureReady";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ServiceSection />
      <FutureReady />
    </>
  );
}

export default App;
