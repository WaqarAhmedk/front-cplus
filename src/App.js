import logo from './logo.svg';
import './App.css';
import Login from './login';
import { Box, Container } from '@mui/material';
import SignUp from './signup';
import AllProfiles from './components/AllProfiles';
import { profileData } from './mock';
import Profile from './Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (



    <Box sx={{
      height: '100vh'
    }}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

          <Route path='/user' element={<Profile />} />

        </Routes>
      </BrowserRouter>

      {/* <Profile /> */}
      {/* <AllProfiles profileData={profileData} /> */}
    </Box>
  );
}

export default App;
