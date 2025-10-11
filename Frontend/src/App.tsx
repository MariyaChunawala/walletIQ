import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import _ from 'lodash';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import Dashboard from './Pages/Dashboard/Home';
import Income from './Pages/Dashboard/Income';
import Expenses from './Pages/Dashboard/Expenses';
import { getCookie } from './Utils/cookies';

const Root = () => {
  // check if auth_token exist in cookies 
  const cookie = getCookie('auth_token');
  return _.isEmpty(cookie) ?
    <Navigate to='/login' /> 
    : <Navigate to='/dashboard' />
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Root />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/income' element={<Income />}/>
          <Route path='/expenses' element={<Expenses/>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App;

