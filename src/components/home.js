import React, {Component} from 'react';

export default class Home extends Component {
    render() {
      return (
        <div>
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight">
                <ul className="slides">
                    <li style={{backgroundImage: 'url(images/jojo.jpg)'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner js-fullheight">
                            <div className="desc">
                                <h1>Hæ! <br />Ég heiti Jóhanna Karen </h1>
                                <p><a className="btn btn-primary btn-learn">Download CV <i className="icon-download4" /></a></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>
                    <li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner">
                            <div className="desc">
                                <h1>Ég er <br />tölvunarfræðingur</h1>
                                <p><a className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3" /></a></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>
                </ul>
                </div>
            </section>
        </div>
      )
    }
}