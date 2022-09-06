import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './pages/Header';
import Login from './pages/LogIn';
import RegisterReciever from './pages/Reciever';
import Register from './pages/Register';


function App() {
  return (
    <>
    <Router>
    <div className='container'>
        <Header/>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path = '/register' element={<Register/>}/>
            <Route path = '/add' element={<RegisterReciever/>}/>
        </Routes>
      </div>
    </Router>
    <ToastContainer/>
    </>
    
  );
}

export default App;
