import React from 'react'
import axios from 'axios'
import Base64 from 'js-base64'
class ImageOp extends React.Component{
  constructor(){
    super()
    this.state = {
      furl : null,
      file : null,
      pbn : null,
      pbg : null,
      prl : null,
      prmu : null,
      data : null,
      fileDownloadUrl : "",
      brightness : 0,
      neg : 1,
      blur : 0,
    }
    this.handleChange = this.handleChange.bind(this)
    this.changeN = this.changeN.bind(this)
    this.changeG = this.changeG.bind(this)
    this.changeL = this.changeL.bind(this)
    this.changeM = this.changeM.bind(this)
    this.handleDecrypt = this.handleDecrypt.bind(this)
    this.handleBrightness = this.handleBrightness.bind(this)
    this.handleNegation = this.handleNegation.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleEdge = this.handleEdge.bind(this)
    this.handleKeys = this.handleKeys.bind(this)

  }
  handleKeys(event){
    this.setState({
      keyfile : event.target.files[0]
    },() =>{
      const reader = new FileReader()
        reader.onload = async (e) => {
          const text = (e.target.result)
          var res = JSON.parse(text)
          this.setState({
            pbn : res.pbn,
            pbg : res.pbg,
            prl : res.prl,
            prmu : res.prmu
          })
      };
      reader.readAsText(event.target.files[0])

    })
  }
  handleChange(event){
    this.setState({
      file : event.target.files[0]
    },() =>{
      const reader = new FileReader()
        reader.onload = async (e) => {
          const text = (e.target.result)
          // console.log(text)
          this.setState({
            data : text
          })
      };
      reader.readAsText(event.target.files[0])

    })

  }
  changeN(event){
    this.setState({
      pbn : event.target.value
    })
  }
  changeG(event){
    this.setState({
      pbg : event.target.value
    })
  }
  changeL(event){
    this.setState({
      prl : event.target.value
    })
  }
  changeM(event){
    this.setState({
      prmu : event.target.value
    })
  }

  handleBrightness(event){
    const formData = new FormData();
    formData.append("data",JSON.stringify(JSON.parse(this.state.data)));
    formData.append("pbn",this.state.pbn);
    formData.append("pbg",this.state.pbg);
    formData.append("prl",this.state.prl);
    formData.append("prmu",this.state.prmu);
    this.setState({
      brightness : event.target.value
    })
    formData.append("brightness",this.state.brightness)
    this.setState({
      brightness : event.target.value
    })
    axios.post("https://ragnar177.pythonanywhere.com/inc-brightness", formData, { // receive two parameter endpoint url ,form data
    })
    .then((response) => {
      var s = `data:image/gif;base64,${response.data.b64}`
      this.setState({
        furl : s
      })
      console.log(  s )
    })
  }

  handleNegation(){
    const formData = new FormData();
    formData.append("data",JSON.stringify(JSON.parse(this.state.data)));
    formData.append("pbn",this.state.pbn);
    formData.append("pbg",this.state.pbg);
    formData.append("prl",this.state.prl);
    formData.append("prmu",this.state.prmu);
    formData.append("negation",this.state.neg);
    this.setState({
      neg : (this.state.neg+1)%2
    })
    axios.post("https://ragnar177.pythonanywhere.com/image-negation", formData, { // receive two parameter endpoint url ,form data
    })
    .then((response) => {
      var s = `data:image/gif;base64,${response.data.b64}`
      this.setState({
        furl : s
      })
      console.log(  s )
    })
  }

  handleBlur(event){
    const formData = new FormData();
    formData.append("data",JSON.stringify(JSON.parse(this.state.data)));
    formData.append("pbn",this.state.pbn);
    formData.append("pbg",this.state.pbg);
    formData.append("prl",this.state.prl);
    formData.append("prmu",this.state.prmu);
    formData.append("blur",event.target.value);
    this.setState({
      blur : event.target.value
    })
    axios.post("https://ragnar177.pythonanywhere.com/image-blur", formData, { // receive two parameter endpoint url ,form data
    })
    .then((response) => {
      var s = `data:image/gif;base64,${response.data.b64}`
      this.setState({
        furl : s
      })
      console.log(  s )
    })
  }
  handleEdge(event){
    const formData = new FormData();
    formData.append("data",JSON.stringify(JSON.parse(this.state.data)));
    formData.append("pbn",this.state.pbn);
    formData.append("pbg",this.state.pbg);
    formData.append("prl",this.state.prl);
    formData.append("prmu",this.state.prmu);
    this.setState({
      blur : event.target.value
    })
    axios.post("https://ragnar177.pythonanywhere.com/image-edge-detect", formData, { // receive two parameter endpoint url ,form data
    })
    .then((response) => {
      var s = `data:image/gif;base64,${response.data.b64}`
      this.setState({
        furl : s
      })
      console.log(  s )
    })
  }

  handleDecrypt(){
    const formData = new FormData();

      formData.append("data",JSON.stringify(JSON.parse(this.state.data)));
      formData.append("pbn",this.state.pbn);
      formData.append("pbg",this.state.pbg);
      formData.append("prl",this.state.prl);
      formData.append("prmu",this.state.prmu);
      formData.append("brightness",this.state.brightness)
      axios.post("https://ragnar177.pythonanywhere.com/decrypt-image", formData, { // receive two parameter endpoint url ,form data
      })
      .then((response) => {
        var s = `data:image/gif;base64,${response.data.b64}`
        this.setState({
          furl : s
        })
        console.log(  s )
      })
  }



  render(){
    return (
      <div className="right-view">
        <div className="heading-bar">
          <p className="page-heading">Image Operations</p>
        </div>
        <label for="files" class="example_b">Select Encrpyted Image</label>
        <input id="files" className="hide-button" type="file" onChange={this.handleChange}/>

        <label for="files2" class="example_b">Upload Keys</label>
        <input id="files2" className="hide-button" type="file" onChange={this.handleKeys}/>
        <br/>
        <br/>
        <input className="input-box slight-left" value = {this.state.pbn} type = "number" placeholder = "Public Key N" onChange={this.changeN}/>
        <input className="input-box slight-left" value = {this.state.pbg} type = "number" placeholder = "Public Key G" onChange={this.changeG}/>
        <br/>
        <br/>
        <br/>
        <input className="input-box slight-left" value = {this.state.prl} type = "number" placeholder = "Private Key Lambda" onChange={this.changeL}/>
        <input className="input-box slight-left" value = {this.state.prmu} type = "number" placeholder = "Private Key Mu" onChange={this.changeM}/>
        <br/>
        <br/>
        <input className="input-button example_b" id="clickMe" type="button" value="Decrypt Image" onClick={this.handleDecrypt} />
        <div className="controls">
          <ul>
            <li>
            <input className="input-box slight-left" value = {this.state.brightness} type = "number" placeholder = "Brightness" onChange={this.handleBrightness}/>
            </li>
            <li>
              <input className="input-button example_b" id="clickMe" type="button" value="Image Negation" onClick={this.handleNegation} />
            </li>
            <li>
            <input className="input-box slight-left" value = {this.state.blur} type = "number" placeholder = "Blur Radius" onChange={this.handleBlur}/>
            </li>
            <li>
              <input className="input-button example_b" id="clickMe" type="button" value="Edge Detect" onClick={this.handleEdge} />
            </li>
          </ul>
        </div>
        <a style={{display: "none"}}
         download={"img"}
         href={this.state.fileDownloadUrl}
         ref={e=>this.dofileDownload = e}
         >download it</a>
         <img src={this.state.furl}/>
      </div>
    )
  }
}
export default ImageOp
