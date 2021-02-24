import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div className="soundsystem">
        <div id="services" className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Sound System</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6"> <img src="img/other/soundsystem.jpg" className="img-responsive img-size" alt=""/> </div>
          </div>
        </div>
        <div className="soundcloudBot child">
        
        </div>

      </div>
    );
  }
}

export default Services;
