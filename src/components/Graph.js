import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data1 = [
  {
    name: 'A', freq: 2400,fre2 :2222
  },
  {
    name: 'B', freq: 5000,fre2 : 2300
  }
];
class Graph extends PureComponent {
  constructor(props){
    super()
    this.state = {
      data : {}
    }
  }
  componentDidMount() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            plainText:"abcd",
            'shift':25
        })
    };

    console.log(data1);

    fetch("http://127.0.0.1:8000",requestOptions).then(response=>response.json()).then(data =>{
      console.log(data.graphdata)
      this.setState({
        data : data.graphdata
      })
    })
  }
  render(){
      return (
        <LineChart
          width={500}
          height={300}
          data={this.state.data}
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
}
export default Graph;
