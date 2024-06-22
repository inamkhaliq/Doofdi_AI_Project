import React from 'react'
import Banner from '../Components/Banner/Banner'
import Services from '../Components/Services/Services'
import EngateToEarn from '../Components/EngageToEarn/EngateToEarn'
import LeaderB from '../Components/LeaderBoard/LeaderB'
import Works from '../Components/Works/Works'
import Features from '../Components/Features/Features'
import Unlock from '../Components/Unlock/Unlock'
import Points from '../Components/EngageToEarn/Points'
import LogInSubscribe from '../Components/Subscribe/LogInSubscribe'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useParams } from 'react-router-dom'
import SignUpPage from './SigUpPage'
import LoginPage from './LoginPage'
import LineChart from '../Components/Charts/LineChart'

const Home = () => {
  
  const{header}=useParams();
  return (
    <section>
      <Header></Header>
        {/* <LineChart></LineChart> */}
        {header==="Login"?<LoginPage/>:""}
        {header==="SignUp"?<SignUpPage/>:""}
        {
        !header?<>
        <Banner></Banner>
        <Services></Services>
        <EngateToEarn></EngateToEarn>
        <Points></Points>
        <LeaderB></LeaderB>
        <Works></Works>
        <Features></Features>
        <Unlock></Unlock>
        <LogInSubscribe></LogInSubscribe>
        </>:""}
      <Footer></Footer>
    </section>
  )
}

export default Home