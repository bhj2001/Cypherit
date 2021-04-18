import React from 'react'

class KeyGenerator extends React.Component{
  constructor(){
    super()
    this.state = {
      pbn : "",
      pbg : "",
      prl : "",
      prmu : "",
      bits : 10,
      fileDownloadUrl : null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.changeBits = this.changeBits.bind(this)
    this.downloadFile = this.downloadFile.bind(this)
  }
  handleChange(event){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'bits':this.state.bits
        })
    };
    fetch("https://ragnar177.pythonanywhere.com/generate-keys",requestOptions).then(response=>response.json()).then(data =>{
      this.setState({
        pbn : data.pbn,
        pbg : data.pbg,
        prl : data.prl,
        prmu : data.prmu
      })
    })
  }
  changeBits(event){
      this.setState({
        bits : event.target.value
      })

  }

  downloadFile(){
    const blob = new Blob([JSON.stringify(this.state)]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    this.setState ({fileDownloadUrl: fileDownloadUrl},
      () => {
        this.dofileDownload.click();
        URL.revokeObjectURL(fileDownloadUrl);
        this.setState({fileDownloadUrl: ""})
    })
  }
  render(){
    return (
      <div className="right-view">
        <div className="heading-bar">
          <p className="page-heading">Generate Key-Pair</p>
        </div>
        <input className="input-box" value = {this.state.bits} type = "number" placeholder = "Bits" onChange={this.changeBits}/>
        <p></p>
        <div className="content-box">
          <p className="box-heading">Public Key (n,g)</p>
          <div className="view-box">
            <p className="value-box">{this.state.pbn}</p>
            <p className="value-box slight-left" >{this.state.pbg}</p>
          </div>
        </div>
        <div className="content-box">
          <p className="box-heading">Private Key (lambda,mu)</p>
          <div className="view-box">
            <p className="value-box">{this.state.prl}</p>
            <p className="value-box slight-left">{this.state.prmu}</p>
          </div>
        </div>
        <input className="input-button example_b" id="clickMe" type="button" value="Generate Keys" onClick={this.handleChange} />
        <input className="input-button example_b slight-left slight-left" id="clickMe" type="button" value="Download Keys" onClick={this.downloadFile} />
        <a style={{display: "none"}}
         download={"temp"}
         href={this.state.fileDownloadUrl}
         ref={e=>this.dofileDownload = e}
         >download it</a>
      </div>
    )
  }
}

export default KeyGenerator
