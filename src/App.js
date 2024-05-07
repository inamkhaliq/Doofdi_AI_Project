
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import EngateToEarn from './Components/EngageToEarn/EngateToEarn';
import LeaderB from './Components/LeaderBoard/LeaderB';
import Works from './Components/Works/Works';
import Features from './Components/Features/Features';
import Unlock from './Components/Unlock/Unlock';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';
import Drawer from './Components/Drawer/Drawer';

function App() {
  return (
    <div className="App">
      {/* <ButtonOrange text="hi"></ButtonOrange> */}
      {/* <Drawer></Drawer> */}
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <EngateToEarn></EngateToEarn>
      <LeaderB></LeaderB>
      <Works></Works>
      <Features></Features>
      <Unlock></Unlock>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
