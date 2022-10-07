
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
  );
}

export default App;
