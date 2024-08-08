import logo from './logo.svg';

import './App.css';
import Headerbar from './Components/Headerbar';
import Banner from './Components/Banner';
import Overview from './Components/Overview';
import Partner from './Components/Partner';
import Features from './Components/Features';
import Speaker from './Components/Speaker';
import TicketBookSection from './Components/TicketBookSection';
import ScheduleSection from './Components/ScheduleSection';
import Pricing from './Components/Pricing';
import Gallery from './Components/Gallery';
import Testimonials from './Components/Testimonials';
import FAQ from './Components/FAQ';
import Direction from './Components/Direction';
import Blog from './Components/Blog';
import Subscribe from './Components/Subscribe';
import Footerbar from './Components/Footerbar';
import BackToTop from './Components/BackToTop';
function App() {
  return (
    <div className="App">
      <>
      <Headerbar/>
      <Banner/>
      <Overview/>
      <Partner/>
      <Features/>
      <Speaker/>
      <TicketBookSection/>
      <ScheduleSection/>
      <Pricing/>
      <Gallery/>
      <Testimonials/>
      <FAQ/>
      <Direction/>
      <Blog/>
      <Subscribe/>  
      <Footerbar/>
      <BackToTop/>
      </>
    </div>
  );
}

export default App;
