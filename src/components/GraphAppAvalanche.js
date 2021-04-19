import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


function GraphAppAvalanche(props){
    return (
      <LineChart
        width={props.data.width}
        height={props.data.height}
        data={props.data.gdata}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Change in Key with Block-Size 16" stroke="#c77dff" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Change in Key with Block-Size 32" stroke="#ef233c" />
        <Line type="monotone" dataKey="Change in Key with Block-Size 64" stroke="#80b918"  />
        <Line type="monotone" dataKey="Change in text with Block-Size 16" stroke="#ff9f1c" />
        <Line type="monotone" dataKey="Change in text with Block-Size 32" stroke="#00b4d8"  />
        <Line type="monotone" dataKey="Change in text with Block-Size 64" stroke="#4a6fa5 " />
      </LineChart>
    );
}
export default GraphAppAvalanche;
