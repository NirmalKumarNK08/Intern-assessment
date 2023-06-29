import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';
import "../styles/Chart.css"

//Here I declare some demo datas as in the design page. 
//So the real-time values can be fetched and stored here.
const data = [
  { x: '23%', y: 23 },
  { x: '29%', y: 29 },
  { x: '58%', y: 58 },
  { x: '75%', y: 75 },
  { x: '33%', y: 33 },
  { x: '20%', y: 20 },
  { x: '73%', y: 73 },
  { x: '49%', y: 49 },
];

const CustomAreaChart = () => {
  return (
   <div className="areaChart">
      <ResponsiveContainer width="100%" height={100}>
         <AreaChart data={data}>
         <XAxis dataKey="x" />
         <Tooltip />
         <Area type="monotone" dataKey="y" stroke="#5C9CE5" fill="#5C9CE5" fillOpacity={1} />
         {data.map((entry, index) => (
            <ReferenceLine key={`reference-line-${index}`} x={entry.x} stroke="#000"/>
         ))}
         </AreaChart>
      </ResponsiveContainer>
   </div>
  );
};

export default CustomAreaChart;