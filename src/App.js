
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp';
import BVN1 from './Pages/BVN/BVN1/BVN1';
import BVN2 from './Pages/BVN/BVN2/BVN'
import Token from './Pages/Token/Token';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/BVN1' element={<BVN1/>}/>
        <Route path='/BVN2' element={<BVN2/>}/>
        <Route path='/Token' element={<Token/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
  );
}

export default App;
