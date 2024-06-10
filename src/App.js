import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomeWraper from './page/HomeWraper';
import { Tikets } from './components';
import Wedding1 from './components/Wedding1/Wedding1';
import { useEffect, useState } from 'react';
import { customBasesUrlFunc } from './utils/helperFunck';
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from './store/slices/GetProjectSlice/GetProjectApi';
import { selectProjectData } from './store/slices/GetProjectSlice/GetProjectSlice';

function App() {
   const respProjectData = useSelector(selectProjectData);

   const [musicModal, setMusicModal] = useState(false);

   const leng = localStorage.getItem('lang') != null ? localStorage.getItem('lang') : 'am';

   const navigate = useNavigate();

   const { pathname } = useLocation();
   const dispatch = useDispatch()

   useEffect(() => {
      pathname == '/' && navigate(`/${leng}/`);
   }, []);


   useEffect(() => {
      const params = customBasesUrlFunc();
      if (pathname !== `/${leng}/wedding1`) {
        params?.token && dispatch(getProject(params.token));
      }
    }, []);



   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<HomeWraper />}>
               <Route path=":lang">
                  <Route path="wedding1">
                     <Route index element={<Wedding1 />} />
                     {/* <Route path=":m" element={<Wedding1/>} /> */}
                  </Route>
                  <Route
                     path="tikets"
                     element={
                        <div style={{ backgroundColor: 'black' }}>
                           <Tikets />
                        </div>
                     }
                  />
               </Route>
            </Route>
         </Routes>
      </div>
   );
}

export default App;
