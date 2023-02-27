import './App.css';
import { Analitycs } from './components/Analitycs';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import PricingCards from './components/PricingCards';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analitycs/>
      <Newsletter/>
      <PricingCards/>
      
    </div>
  );
}

export default App;
