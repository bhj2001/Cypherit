import React from 'react'
import Graphapp from './Graphapp.js'


const roundlist = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
class Pa1 extends React.Component {
  constructor(){
    super()
    this.state = {
      cipher: "",
      graphdata : "",
      plainText : "",
      rounds : 1,
      blockSize : 16,
      key : "",
      mode : 1,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRound = this.handleRound.bind(this)
    this.handleBlockSize = this.handleBlockSize.bind(this)
    this.handleKey = this.handleKey.bind(this)
  }

  handleKey(event){
    this.setState({
      key : event.target.value
    })
  }
  handleRound(event){
    this.setState({
      rounds : event.target.value
    })
  }
  handleBlockSize(event){
    this.setState({
      blockSize : event.target.value
    })
  }
  handleChange(event){
    this.setState({
      plainText : event.target.value
    },() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                plainText:this.state.plainText,
                rounds : this.state.rounds,
                key : this.state.key,
                blockSize : this.state.blockSize,
                mode : this.state.mode

            })
        };
        fetch("https://ragnar177.pythonanywhere.com/des",requestOptions).then(response=>response.json()).then(data =>{
          console.log(data)
          this.setState({
            cipher : data.txt

          })
        })
    })

  }





  componentDidMount(){
  }
  render () {

    return (
      <div className = "right-view">
        <div className="heading-bar">
          <p className="page-heading">Practical Assignment - 1</p>
        </div>
        <div>
          <ul className="text-input-box">

            <li className="input-item">
              <div >
                <p className="input-box-heading">Block Size</p>
                <div >
                  <select value={this.state.selectValue} onChange={this.handleBlockSize}>
                   <option value="16">16 Bits</option>
                    <option value="32">32 Bits</option>
                    <option value="64">64 Bits</option>
                  </select>
                </div>
              </div>
            </li>

            <li className="input-item">
              <div >
                <p className="input-box-heading">Rounds</p>
                <div >
                  <select value={this.state.selectValue} onChange={this.handleRound}>
                  {roundlist.map(r => (
                    <option value={r}>{r}</option>
                  ))}
                  </select>
                </div>
              </div>
            </li>

            <li className="input-item">
              <div >
                <p className="input-box-heading">Key</p>
                <input className="input-box" value = {this.state.key} type = "text" placeholder = "Key" onChange={this.handleKey}/>
              </div>
            </li>
          </ul>
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
          <Graphapp  data = {this.state.graphdata}/>
        </div>
      </div>
    )
  }
}

export default Pa1
