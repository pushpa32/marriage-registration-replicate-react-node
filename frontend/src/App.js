import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './Form/Index';
import PanelIndex from './panel/PanelIndex';
import Login from './login/Login';
import jwt_decode from 'jwt-decode';
import Page404 from './Page404';
import OnSuccess from './Form/pages/OnSuccess';

function App() {
  // localStorage.removeItem("data");
  const logCheck = localStorage.getItem("data");
  let decoded_data = ""

  if (logCheck != null) {
    decoded_data = jwt_decode(logCheck)
  }
  return (
    <div>
      <Routes>
        {logCheck !== null ?
          <>
            <Route path="/*" element={<PanelIndex decoded_data={decoded_data} />} />
            <Route path="/userform" element={<Index />} />
            <Route path="/success" element={<OnSuccess />} />
          </>
          :
          <>
            <Route path="/" element={<Login />} />
            <Route path="/userform" element={<Index />} />
            <Route path="/success" element={<OnSuccess />} />
          </>
        }
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
