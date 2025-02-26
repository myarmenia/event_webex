import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomeWraper from './page/HomeWraper';
import Wedding1 from './components/Wedding1/Wedding1';
import { useEffect, useState } from 'react';

function App() {
  const [musicModal, setMusicModal] = useState(false);


  const leng = localStorage.getItem('lang') != null ? localStorage.getItem('lang') : 'am';

   const navigate = useNavigate();

   const { pathname } = useLocation();

   useEffect(() => {
      pathname == '/' && navigate(`/${leng}/`);
   }, []);

 
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<HomeWraper/>}>
                <Route path=':lang'>
                    <Route path='wedding1'>
                        <Route index element={<Wedding1/>}/>
                        <Route path=':name' element={<h1>aaaaaaaaa</h1>}/>
                    </Route>
                    <Route path='birthday' element={<h1>Birthday</h1>}/>
                </Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
