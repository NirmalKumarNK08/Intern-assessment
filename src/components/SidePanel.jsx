import React from 'react';
import {useState} from "react";
import "../styles/SidePanel.css";

const SidePanel = () => {
   const [value, setValue] = useState(0);
   const [active, setActive] = useState(1);

   const toggleChange = () => {
      if(value === 0) {
      setValue(1);
      } else {
      setValue(0);
      }
   }

   const handleActiveButton = (buttonIndex) => {
      setActive(buttonIndex);
   }
   return (
      <div className="subContainer-1">
         <div className="topBtns">
            <button className='addbtn'>
               <span class="material-icons outlined">add</span>
            </button>
            <div className="dotBtns">
               <button className={`dot ${active === 0 ? 'active' : ''}`}
                  onClick={() => handleActiveButton(0)}
               ></button>
               <button className={`dot ${active === 1 ? 'active' : ''}`}
                  onClick={() => handleActiveButton(1)}
               ></button>
               <button className={`dot ${active === 2 ? 'active' : ''}`}
                  onClick={() => handleActiveButton(2)}
               ></button>
            </div>
            <div className='toggleInput'>
               °C &nbsp;
               <input type="range" min="0" max="1" step="1" value={value} onClick={toggleChange} class="toggle-switch"></input>
               &nbsp;°F
            </div>
         </div>
         <div className="middleDetails">
            <div className='middle-location'>
               <div className='location-contents'>
                  <span style={{fontSize: "1em"}} class="material-icons">near_me</span> &nbsp;
                  <p style={{fontSize: "1.2em"}}>Chennai, India</p>
               </div>
               <div className='time-contents'>
                  <span style={{fontSize: "1em"}} class="material-icons">access_time</span> &nbsp;
                  <p>01:45</p>
               </div>
            </div>
            <br/>
            <div className='middle-date'>
               <div className='date-contents'>
                  <p>Today 27 June</p>
               </div>
               <div className='time-contents'>
                  <span style={{fontSize: "1em"}} class="material-icons">access_time</span> &nbsp;
                  <p>13:45</p>
               </div>
            </div>
         </div>
         <div className="bottomCelcius">
            <div className='celcius-details'>
               <button>
                  <span class="material-icons">arrow_back_ios</span>
               </button>
               <h1 style={{fontSize: "5em", margin: "1rem"}}>27°</h1>
               <button>
                  <span class="material-icons">arrow_forward_ios</span>
               </button>
            </div>
            <div className='weather-name'>
               <span class="material-icons" style={{marginRight: "10px"}}>wb_sunny</span> &nbsp;
               <h2>Sunny</h2>
            </div>
         </div>
      </div>
   )
}

export default SidePanel;