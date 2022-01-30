import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import All from "./components/All";
import Application from "./components/Application";
// import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>    
    <Routes>
      <Route exact path ="/Home" element={<Home/>}/>
      {/* <Route exact path ="/Portfolio" element={<Portfolio/>}/> */}
      

      <Route exact path ="/All" element={<All/>}/>
      <Route exact path ="/Application" element={<Application/>}/>
     
    </Routes>
    </>
  );
}

export default App;
