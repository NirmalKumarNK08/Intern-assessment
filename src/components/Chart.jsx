import React from 'react';
import "../styles/Chart.css";
import { useState } from 'react';
import AreaCharts from "../components/AreaCharts";

const Chart = () => {
  const [selectedOption, setSelectedOption] = useState("precipitation");

  const handleSelectedOption = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className='chart'>
      <div className="chart-top">
        <div className="chartName">
          <h4>Upcoming hours</h4>
        </div>
        <div className="chartSettings">
          <select
            className='dropdown' 
            name="#" 
            id="#"
            onChange={handleSelectedOption}
            value={selectedOption}
            >
            <option value="humidity">Humidity</option>
            <option value="wind">Wind</option>
            <option selected value="precipitation">Rain Precipitation</option>
            <option value="uvIndex">UV Index</option>
            <option value="feel">Feels like</option>
            <option value="chance">Chance of rain</option>
          </select>
          <button className='moreSetting'>Next days&nbsp;<span class="material-icons">arrow_forward_ios</span></button>
        </div>
      </div>
      <div className="chart-main">
        <div className="info">
          <div className="info-1 i">
            <p>Now</p>
            <span class="material-icons">wb_sunny</span>
            <p>27°</p>
          </div>
          <div className="info-2 i">
            <p>11:00</p>
            <span class="material-icons">wb_sunny</span>
            <p>28°</p>
          </div>
          <div className="info-3 i">
            <p>12:00</p>
            <span class="material-icons">wb_sunny</span>
            <p>28°</p>
          </div>
          <div className="info-4 i">
            <p>13:00</p>
            <span class="material-icons">wb_sunny</span>
            <p>29°</p>
          </div>
          <div className="info-5 i">
            <p>14:00</p>
            <span class="material-icons">wb_sunny</span>
            <p>30°</p>
          </div>
          <div className="info-6 i">
            <p>15:00</p>
            <span class="material-icons">wb_sunny</span>
            <p>29°</p>
          </div>
          <div className="info-7 i">
            <p>16:00</p>
            <span class="material-icons">wb_sunny</span>
            <p>29°</p>
          </div>
          <div className="info-8 i">
            <p>17:00</p>
            <span class="material-icons">wb_sunny</span>
            <p>28°</p>
          </div>
        </div>
        <div className="chartLines">
          <AreaCharts />
        </div>
      </div>
    </div>
  )
}

export default Chart