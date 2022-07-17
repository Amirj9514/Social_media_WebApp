import "./App.css"
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/home/home";
import Profile from "./Pages/profile/profile";
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.authReducer.authData)
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: '0' }}></div>
      <div className="blur" style={{ top: "36%", left: '-8rem' }}></div>
      {/* <Home />
      <Profile /> */}
      {/* <Auth /> */}
      <Routes>
        <Route path="/" element={user ? <Navigate to="home" /> : <Navigate to='auth' />}></Route>
        <Route path="/home" element={user ? <Home /> : <Navigate to='../auth' />} />
        <Route path="/auth" element={user ? <Navigate to='../home' /> : <Auth />} />
        <Route path="/profile/:id" element={user ? <Profile /> : <Navigate to='../auth' />}></Route>
      </Routes>
    </div>
  );
}

export default App;
