import classes from "./App.module.css"
import NavigationBar from './Layout/NavBar/Navigation'
import Nav from "./Layout/NavBar/Nav"
import Home from "./Components/Home/Home" 
import { Route, Routes } from "react-router"
import Community from "./Components/community/Community"
import Mentor from "./Components/Mentor/Mentor"

function App() {

  return (
    <div className={classes.rootScreen}>
      {/* <Nav/> */}
      <NavigationBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/communities" element={<Community/>}/>
          <Route path="/mentors" element={<Mentor/>}/>
      </Routes>
    </div>
  )
}

export default App
