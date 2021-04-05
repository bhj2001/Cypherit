import React from 'react'
import Graphapp from './Graphapp.js'


// var shift = 25
class Pa0 extends React.Component {
  constructor(){
    super()
    this.state = {
      cipher: "",
      graphdata : "",
      alpha : "",
      plainText : "",
      shift : 25,
      lastwritten : 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangedCipher = this.handleChangedCipher.bind(this)
    this.handleShift = this.handleShift.bind(this);
    this.getPlainText = this.getPlainText.bind(this);
    this.getCipherText = this.getCipherText.bind(this);
  }

  handleChange(event){
    this.setState({
      plainText : event.target.value,
      lastwritten : 0
    },()=>{this.getCipherText()})
  }

  handleShift(event)
  {
    this.setState({
      shift : event.target.value
    },()=>{
      if(!this.state.lastwritten)
        this.getCipherText();
      else
        this.getPlainText();
    })

  }

  handleChangedCipher(event){
    this.setState({
      cipher : event.target.value,
      lastwritten : 1
    },()=>{this.getPlainText()})


  }

  getCipherText(){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            plainText:this.state.plainText,
            'shift':this.state.shift
        })
    };
    fetch("http://127.0.0.1:8000/pa0",requestOptions).then(response=>response.json()).then(data =>{
      this.setState({
        cipher : data.cipher,
        graphdata : data.graphdata,
      })
    })
  }

  getPlainText()
  {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              plainText:this.state.cipher,
              'shift':24 - this.state.shift
          })
      };
      fetch("http://127.0.0.1:8000/pa0",requestOptions).then(response=>response.json()).then(data =>{
        this.setState({
          plainText : data.cipher
        })
      })
  }

  componentDidMount(){
  }
  render () {
    return (
      <div className = "right-view">
        <form>
        <textarea className = "inputBox" value = {this.state.plainText} type = "text" placeholder = "Plain Text" onChange={this.handleChange}/>
        {/*<input value = {this.state.shift} type = "text" placeholder = "Shift" onChange={this.handleShift}/>*/}
        <textarea className = "inputBox cipher-input" value = {this.state.cipher} type = "text" placeholder = "Cipher Text" onChange={this.handleChangedCipher}/>
        {/*<h1>{this.state.cipher}</h1>*/}
        </form>
        <div className = "graph-style">
          <Graphapp  data = {this.state.graphdata}/>
        </div>
      </div>
    )
  }
}

export default Pa0
