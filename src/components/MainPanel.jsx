import React from 'react';
import "../styles/MainPanel.css";
import Chart from "../components/Chart";
import Cards from "../components/Cards";

const MainPanel = () => {
   //Fetch the name if the web app is dynamic.
   let name = "Nirmal";
  return (
   <div className="subContainer-2">
      <div className="Container">
         <div className='topContent'>
            <div className='welcome-content'>
               <h1 style={{fontSize: "1.4em"}}>Welcome back {name} !!</h1>
               <p>Check out today's weather information</p>
            </div>
            <div className='logo-settings'>
               <button>
                  <span class="material-icons">more_horiz</span>
               </button>
               <button>
                  <span class="material-icons logo">account_circle</span>
               </button>
            </div>
         </div>
         <Chart />
         <Cards />
      </div>
   </div>
  )
}

export default MainPanel