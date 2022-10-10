
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp';
import BVN from './Pages/BVN/BVN'
import Token from './Pages/Token/Token';


function App() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/BVN' element={<BVN/>}/>
        <Route path='/Token' element={<Token/>}/>
      </Routes>
  );
}

export default App;
