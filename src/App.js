import React from 'react';
import './App.css'; 
import { render } from '@testing-library/react';
import TopBar from "./Topbar/TopBar"
import Classes from "./app.module.css" 
import LeftSideBox from  "./LeftSide/LeftSide" ; 
import RightSideBox from "./RightSideDiv/RightSide"


class App extends React.Component {

   render() { 
  
   return(
    <div className="App"> 
       <TopBar/>
       <div className = {Classes.LandingPageWrap}>
         <LeftSideBox/>
         <RightSideBox ClassName = {Classes.Extraeffort}/>
      </div>
    </div>
     

   ) ; 


  } 

 


}

export default App;
