import React, { PureComponent } from 'react';


class Home extends PureComponent {
  constructor(props){
    super()
    this.state = {

    };
  }


  render(){
      return (<div>
        <p className="home-heading"> Network Security Project </p>
        <div className="bottom-line-container">
          <p className="footer-line"> Designed by ragnar17 with </p>
          <p className="footer-line bottom-heart">&#9829;</p>
        </div>
      </div>
    )
  }
}
export default Home;
