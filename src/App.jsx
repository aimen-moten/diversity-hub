import classes from "./App.module.css"
import NavigationBar from './Layout/NavBar/Navigation'
import Nav from "./Layout/NavBar/Nav"
import Home from "./Components/Home/Home" 
import { Route, Routes } from "react-router"
import Community from "./Components/community/Community"
import Mentor from "./Components/Mentor/Mentor"
import Cookies from "js-cookie"
import { setAuthToken } from "./utils/setHeaders"
import JobBoard from "./Components/JobBoard/JobBoard"
import AboutUs from "./Components/AboutUs/AboutUs"
import Login from "./Components/Auth/Login"


function App() {
  const token=Cookies.get("_uj1")
  setAuthToken(token)
  return (
    <div className={classes.complete}>
    <div className={classes.rootScreen}>
      {/* <Nav/> */}
      <NavigationBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/communities" element={<Community/>}/>
          <Route path="/mentors" element={<Mentor/>}/>
          <Route path="/jobs" element={<JobBoard/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/signin" element={<Login/>}/>

      </Routes>
    </div>
    </div>
  )
}

export default App
