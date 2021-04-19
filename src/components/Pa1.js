import React from 'react'
import GraphAppAvalanche from './GraphAppAvalanche.js'


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
      seed : 0,
      m1 : "Plain",
      m2 : "Cipher",
      padding : 1,

    }
    this.handleDataApi = this.handleDataApi.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRound = this.handleRound.bind(this)
    this.handleBlockSize = this.handleBlockSize.bind(this)
    this.handleKey = this.handleKey.bind(this)
    this.handleSeed = this.handleSeed.bind(this)
    this.changeMode = this.changeMode.bind(this)
    this.handleGraph = this.handleGraph.bind(this)
    this.handlePadding = this.handlePadding.bind(this)

  }

  handlePadding(event){
    this.setState({
      padding : (this.state.padding+1)%2
    })
  }
  changeMode(event){
    this.setState({
      mode : (this.state.mode+1)%2,
      m1 : this.state.m1 == "Plain" ? "Cipher" : "Plain",
      m2 : this.state.m2 == "Plain" ? "Cipher" : "Plain"
    })
  }
  handleSeed(event){
    this.setState({
      seed : event.target.value
    })
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

  handleDataApi(tmptxt){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            txt:tmptxt,
            rounds : this.state.rounds,
            key : this.state.key,
            blockSize : this.state.blockSize,
            mode : this.state.mode,
            seed : this.state.seed,
            padding : this.state.padding

        })
    };
    fetch("https://ragnar177.pythonanywhere.com/des",requestOptions).then(response=>response.json()).then(data =>{
      // console.log(data)
      if(this.state.mode){
        this.setState({
          cipher : data.txt
        })
      }
      else{
        this.setState({
          plainText : data.txt
        })
      }
    })
  }

  handleGraph(){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            txt: this.state.mode ? this.state.plainText : this.state.cipher,
            rounds : this.state.rounds,
            key : this.state.key,
            blockSize : this.state.blockSize,
            mode : this.state.mode,
            seed : this.state.seed,
            padding : this.state.padding,

        })
    };
    fetch("https://ragnar177.pythonanywhere.com/des-avalanche",requestOptions).then(response=>response.json()).then(data =>{
      this.setState({
        graphdata : data.graphdata
      })
    })

  }
  handleChange(event){
    if(this.state.mode){
      this.setState({
        plainText : event.target.value
      },() => {
        this.handleDataApi(event.target.value)
      })
    }
    else {
      this.setState({
        cipher : event.target.value
      },() => {
        this.handleDataApi(event.target.value)
      })
    }

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
                  <select className="select-css" value={this.state.selectValue} onChange={this.handleBlockSize}>
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
                  <select className="select-css" value={this.state.selectValue} onChange={this.handleRound}>
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

            <li className="input-item">
              <div >
                <p className="input-box-heading">Seed</p>
                <input className="input-box" value = {this.state.seed} type = "number" placeholder = "Seed" onChange={this.handleSeed}/>
              </div>
            </li>

            <li className="input-item">
              <div className="control-button">
                <p className="input-box-heading">{this.state.m1} - {this.state.m2}</p>
                <svg onClick={this.changeMode} id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m92.69 216c6.23 6.24 16.39 6.24 22.62 0l20.69-20.69c6.24-6.23 6.24-16.39 0-22.62l-20.69-20.69h284.69c26.47 0 48 21.53 48 48 0 13.23 10.77 24 24 24h16c13.23 0 24-10.77 24-24 0-61.76-50.24-112-112-112h-284.69l20.69-20.69c6.24-6.23 6.24-16.39 0-22.62l-20.69-20.69c-6.23-6.24-16.39-6.24-22.62 0l-90.35 90.34c-3.12 3.13-3.12 8.19 0 11.32z"/><path d="m419.31 296c-6.23-6.24-16.38-6.24-22.62 0l-20.69 20.69c-6.252 6.252-6.262 16.358 0 22.62l20.69 20.69h-284.69c-26.47 0-48-21.53-48-48 0-13.23-10.77-24-24-24h-16c-13.23 0-24 10.77-24 24 0 61.76 50.24 112 112 112h284.69l-20.69 20.69c-6.252 6.252-6.262 16.358 0 22.62l20.69 20.69c6.241 6.241 16.38 6.24 22.62 0l90.35-90.34c3.12-3.13 3.12-8.19 0-11.32z"/></g></svg>
              </div>
            </li>
            <li className="input-item">
              <div className="control-button">
                <p className="input-box-heading text-button">Padding</p>
                <input className="input-button example_b" id="clickMe"
                  type="button" value={this.state.padding ? "Enabled" : "Disabled"} onClick={this.handlePadding} />
              </div>
            </li>
          </ul>
          <ul className="text-input-box">

            <li className="input-item">
              <div>
                <p className="input-box-heading">{this.state.m1} Text</p>
                { this.state.mode ?
                (<textarea className = "inputBox" value = {this.state.plainText} type = "text" placeholder = "Plain Text" onChange={this.handleChange}/>)
                :
                (<textarea className = "inputBox" value = {this.state.cipher} type = "text" placeholder = "Cipher Text" onChange={this.handleChange}/>)
              }
              </div>
            </li>
            <li className="input-item">
              <div style={{display:'inline-block'}}>
                <p className="input-box-heading">{this.state.m2} Text</p>
                { this.state.mode ?
                  (<textarea className = "inputBox" value = {this.state.cipher} type = "text" placeholder = "Cipher Text" readonly />)
                  :
                  (<textarea className = "inputBox" value = {this.state.plainText} type = "text" placeholder = "Plain Text" readonly/>)
                }
              </div>
            </li>
            <li className="input-item">
            <div>
              <input className="input-button example_b slight-left" id="clickMe" type="button" value="Avalanche Effect" onClick={this.handleGraph} />
              {console.log(window.innerWidth)}
              <GraphAppAvalanche  data = {{gdata : this.state.graphdata,height : 600, width : window.innerWidth < 1000 ? 600 : 900}}/>
            </div>
            </li>
          </ul>

        </div>

      </div>
    )
  }
}

export default Pa1
