
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp';
import BVN from './Pages/BVN/BVN'


function App() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Login/SignUp' element={<SignUp/>}/>
        <Route path='/Login/SignUp/BVN' element={<BVN/>}/>
      </Routes>
  );
}

export default App;
