import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

// export default class App extends PureComponent {
//   constructor(props){
//     super()
//     console.log(props)
//     this.state = {
//       data : props.data
//     }
//   }

function Graphapp(props){
    return (
      <LineChart
        width={500}
        height={300}
        data={props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pFreq" stroke="#99d98c" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="cFreq" stroke="#168aad" />
      </LineChart>
    );
}
export default Graphapp;
