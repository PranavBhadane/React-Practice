import logo from './logo.svg';
import './App.css';
import Login from './Component/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Timetable from './Component/demo';

function App() {
  return (
    <>
    {/* <BrowserRouter>
     <Routes>
      
        <Route path="/" element={<Login />} />

      </Routes>
    </BrowserRouter> */}
    <Timetable/>
    </>
  );
}

export default App;
