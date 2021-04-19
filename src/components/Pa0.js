import React from 'react'
import Graphapp from './Graphapp.js'


// var shift = 25
class Pa0 extends React.Component {
  constructor(){
    super()
    this.state = {
      cipher: "",
      graphdata : "",
      plainText : "",
      lastwritten : 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangedCipher = this.handleChangedCipher.bind(this)
    this.getPlainText = this.getPlainText.bind(this);
    this.getCipherText = this.getCipherText.bind(this);
  }

  handleChange(event){
    this.setState({
      plainText : event.target.value,
      lastwritten : 0
    },()=>{this.getCipherText()})
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
            plainText:this.state.plainText
        })
    };
    fetch("https://ragnar177.pythonanywhere.com/pa0",requestOptions).then(response=>response.json()).then(data =>{
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
              plainText:this.state.cipher

          })
      };
      fetch("https://ragnar177.pythonanywhere.com/pa0",requestOptions).then(response=>response.json()).then(data =>{
        // console.log(data)
        this.setState({
          plainText : data.cipher,
          graphdata : data.graphdata,
        })
      })
  }

  componentDidMount(){
  }
  render () {
    return (
      <div className = "right-view">
        <div className="heading-bar">
          <p className="page-heading">Practical Assignment - 0</p>
        </div>
        <div>
          <ul className="text-input-box">

            <li className="input-item">
              <div>
                <p className="input-box-heading">Plain Text</p>
                <textarea className = "inputBox" value = {this.state.plainText} type = "text" placeholder = "Plain Text" onChange={this.handleChange}/>
              </div>
            </li>
            <li className="input-item">
              <div style={{display:'inline-block'}}>
                <p className="input-box-heading">Cipher Text</p>
                <textarea className = "inputBox" value = {this.state.cipher} type = "text" placeholder = "Cipher Text" onChange={this.handleChangedCipher}/>
              </div>
            </li>
          </ul>
        </div>
        <div className = "graph-style">
          <Graphapp  data = {{gdata : this.state.graphdata,height : 300, width : 500}}/>
        </div>
      </div>
    )
  }
}

export default Pa0
