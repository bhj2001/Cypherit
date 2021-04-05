import React from 'react'
import axios from 'axios';
class ImageEncrypt extends React.Component{
  constructor(){
    super()
    this.state = {
      furl : null,
      file : null,
      pbn : null,
      pbg : null,
      enc_img : null,
      fileDownloadUrl : "",

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEncrypt = this.handleEncrypt.bind(this)
    this.changeN = this.changeN.bind(this)
    this.changeG = this.changeG.bind(this)
    this.downloadFile = this.downloadFile.bind(this)
  }
  handleChange(event){

    this.setState({
      furl : window.URL.createObjectURL(event.target.files[0]),
      file : event.target.files[0]
    })
  }
  handleEncrypt(event){

    const formData = new FormData();
      formData.append(
        "myFile",
        this.state.file,
        this.state.file.name
      );
      formData.append("pbn",this.state.pbn);
      formData.append("pbg",this.state.pbg);

      axios.post("http://127.0.0.1:8000/encrypt-image", formData, { // receive two parameter endpoint url ,form data
      })
      .then((response) => {
        this.setState({
          enc_img : response.data
        },()=>{
          this.downloadFile()
        })
      })
  }
  downloadFile(){
    console.log(this.state.enc_img)
    const blob = new Blob([JSON.stringify(this.state.enc_img)]);                   // Step 3
    const fileDownloadUrl = URL.createObjectURL(blob); // Step 4
    this.setState ({fileDownloadUrl: fileDownloadUrl}, // Step 5
      () => {
        this.dofileDownload.click();                   // Step 6
        URL.revokeObjectURL(fileDownloadUrl);          // Step 7
        this.setState({fileDownloadUrl: ""})
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
  changeBits(event){
      this.setState({
        bits : event.target.value
      })

  }
  render(){
    return (
      <div className="right-view">
        <div className="heading-bar">
          <p className="page-heading">Encrpyt Image</p>
        </div>
        <label for="files" class="example_b">Select Image</label>
        <input id="files" className="hide-button" type="file" onChange={this.handleChange}/>
        <img src={this.state.furl}/>
        <input className="input-box" value = {this.state.bits} type = "number" placeholder = "Public Key N" onChange={this.changeN}/>
        <input className="input-box" value = {this.state.bits} type = "number" placeholder = "Public Key G" onChange={this.changeG}/>
        <br/>
        <br/>
        <input className="input-button example_b" id="clickMe" type="button" value="Encrypt Image" onClick={this.handleEncrypt} />
        <a style={{display: "none"}}
         download={"temp"}
         href={this.state.fileDownloadUrl}
         ref={e=>this.dofileDownload = e}
         >download it</a>
      </div>
    )
  }
}

export default ImageEncrypt
