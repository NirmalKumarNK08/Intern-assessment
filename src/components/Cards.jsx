import React from 'react';
import "../styles/Cards.css";

const Cards = () => {
  return (
    <div className='cardsContainer'>
      <div className="head">
        <h2 style={{fontSize: "20px"}}>More details of today's weather</h2>
      </div>
      <div className="cardComponents">
        <div className="humidity">
          <div className="top">
            <p>Humidity</p>
            <span class="material-icons icon">grain</span>
          </div>
          <div className="middle">
            <h1>82%&nbsp;</h1> bad    
          </div>
          <div className="last">
            <div>
              <p>good</p>
              <div className="bar-1">
                <div className="percent-1"></div>
              </div>
            </div>
            <div>
              <p>good</p>
              <div className="bar-2">
                <div className="percent-2"></div>
              </div>
            </div>
            <div>
              <p>good</p>
              <div className="bar-3">
                <div className="percent-3"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="wind">
          <div className="top">
            <p>Wind</p>
            <span class="material-icons icon">air</span>
          </div>
          <div className="wMiddle">
            <div class="wBar-container">
              <div class="wBar">
                <p>0</p>
              </div>
              <div class="wBar">
                <p>10</p>
              </div>
              <div class="wBar">
                <p>20</p>
              </div>
              <div class="wBar">
                <p>30</p>
              </div>
              <div class="wBar">
                <p>40</p>
              </div>
            </div>
          </div>
          <div className="wLast">
            <div className='indicator'>
              <div className="indicatorLine">
                <div className="line"></div>
                <div className="indicatorDot"></div>
              </div>
             <h1>8 km/h</h1>    
            </div>
          </div>
        </div>

        <div className="percipitation">
          <div className="top">
            <p>Percipitation</p>
            <span class="material-icons icon">thunderstorm</span>
          </div>
          <div className="middle">
            <h1>1.4 cm</h1>    
          </div>
          <div className="last">
            <div>
              <p>0</p>
              <div className="pBar-1"><div className="pPercent-1"></div></div>
            </div>
            <div>
              <p>10</p>
              <div className="pBar-1"><div className="pPercent-2"></div></div>
            </div>
            <div>
              <p>20</p>
              <div className="pBar-1"><div className="pPercent-3"></div></div>
            </div>
            <div>
              <p>30</p>
              <div className="pBar-1"><div className="pPercent-4"></div></div>
            </div>
            <div>
              <p>40</p>
              <div className="pBar-1"><div className="pPercent-5"></div></div>
            </div>
            <div>
              <p>50</p>
              <div className="pBar-1"><div className="pPercent-6"></div></div>
            </div>
            <div>
              <p>60</p>
              <div className="pBar-1"><div className="pPercent-7"></div></div>
            </div>
            <div>
              <p>70</p>
              <div className="pBar-1"><div className="pPercent-8"></div></div>
            </div>
            <div>
              <p>80</p>
              <div className="pBar-1"><div className="pPercent-9"></div></div>
            </div>
            <div>
              <p>90</p>
              <div className="pBar-1"><div className="pPercent-10"></div></div>
            </div>
            
          </div>
        </div>

        <div className="uvIndex">
          <div className="top">
            <p>UV Index</p>
            <span class="material-icons icon">wb_sunny</span>
          </div>
          <div className="middle">
            <h1>4&nbsp;</h1> medium    
          </div>
          <div className="last">
            <div>
              <p>0-2</p>
              <div className="uvBar-1">
                <div className="uvPercent-1"></div>
              </div>
            </div>
            <div>
              <p>3-5</p>
              <div className="uvBar-2">
                <div className="uvPercent-2"></div>
              </div>
            </div>
            <div>
              <p>6-7</p>
              <div className="uvBar-3">
                <div className="uvPercent-3"></div>
              </div>
            </div>
            <div>
              <p>8-9</p>
              <div className="uvBar-4">
                <div className="uvPercent-4"></div>
              </div>
            </div>
            <div>
              <p>11+</p>
              <div className="uvBar-5">
                <div className="uvPercent-5"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="feels">
          <div className="top">
            <p>Feels like</p>
            <span class="material-icons icon">thermostat</span>
          </div>
          <div className="middle">
            <h1>30°</h1>    
          </div>
          <div className="last">
            <div>
              <div className="detail">
                <p>0°</p>
                <p>25°</p>
                <p>50°</p>
              </div>
              <div className="fBar-1">
                <div className="fPercent-1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="chance">
          <div className="top">
            <p>Chance of rain</p>
            <span class="material-icons icon">water_drop</span>
          </div>
          <div className="middle">
            <h1>42%</h1>    
          </div>
          <div className="last">
            <div>
              <div className="detail">
                <p>0%</p>
                <p>25%</p>
                <p>50%</p>
                <p>75%</p>
                <p>100%</p>
              </div>
              <div className="fBar-1">
                <div className="fPercent-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards;