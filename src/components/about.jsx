import React, { Component } from 'react'
export class about extends Component {
  render() {
    return (
      <div className="about">
        <div className="aboutTitle child">
        </div>

        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" title="sound"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1147369852&color=%23528800&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false">  
        </iframe>
        <div className="soundcloudBot child">
        
        </div>

        <div id="about" className="container about-top">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive img-size" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
