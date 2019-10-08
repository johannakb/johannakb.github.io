import React, {Component} from 'react';

export default class Home extends Component {
    render() {
      return (
        <div>
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight">
                <ul className="slides">
                    <li style={{backgroundImage: 'url(images/home1.jpg)'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner js-fullheight">
                            <div className="desc">
                                <h1>Hæ! <br />Ég heiti Jóhanna </h1>
                                <p><a href="https://docs.google.com/document/d/1UPJ72R4OT6hRG87m2viHPTmIOoiXgoQK4ZPyB4EBN20/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-learn">Download CV <i className="icon-download4" /></a></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>
                    <li style={{backgroundImage: 'url(images/home2.jpg)'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner">
                            <div className="desc">
                                <h1>Ég er <br />tölvunarfræðingur</h1>
                                <p><a href="https://docs.google.com/document/d/1UPJ72R4OT6hRG87m2viHPTmIOoiXgoQK4ZPyB4EBN20/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-learn">Download CV <i className="icon-download4" /></a></p>
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