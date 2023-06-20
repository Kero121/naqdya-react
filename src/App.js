import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';

import Notfound from './components/Notfound';
import Branches from './components/Branches';
import Employees from './components/Employees';
import Payments from './components/Payments';
import Login from './components/Login';
import Aside from './components/Aside';


const SidebarLayout = () => (
  <>
    <Aside />
    <Outlet />
  </>
);

function App() {

  return (
    <div className="App">

      <div >
        <Routes>
         
          <Route element={<SidebarLayout />}>

            <Route path='employees' element={<Employees />} />
            <Route path='branches' element={<Branches />} />
            <Route path='payments' element={<Payments />} />
          </Route>

          <Route path='' element={<Login />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
