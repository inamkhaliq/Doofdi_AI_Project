
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import UserDashBoard from './Pages/UserDashBoard.js';
import AdminDashboard from './Pages/AdminDashboard.js';
import Home from './Pages/Home.js';
import ChartPage from './Pages/ChartPage.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ChartPage' element={<ChartPage/>} />
        <Route path='/:header' element={<Home/>} />
        {/* <Route path='/Login' element={<LoginPage/>} />         */}
        {/* <Route path='/SignUp' element={<SigUpPage/>} />         */}
        <Route path='/Admin' element={<AdminDashboard/>} />        
        <Route path='/Admin/:tool' element={<AdminDashboard/>} />        
        <Route path='/Subscription' element={<UserDashBoard/>} />        
        <Route path='/Subscription/:tool' element={<UserDashBoard/>} />        
      </Routes>
    </div>
  );
}

export default App;
