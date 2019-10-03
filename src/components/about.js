import React, {Component} from 'react';


export default class About extends Component {
    render() {
      return (
        <div>
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                <div className="about-desc">
                <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Ég er nýútskrifaður tölvunarfræðingur frá Háskóla Íslands.</p>
                    <p>Ég vil halda áfram að læra og verða betri forritari. </p>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            </section>

            <section className="colorlib-about">
                <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">Hver eru mín átstríða?</span>
                        <h2 className="colorlib-heading">Nokkur dæmi um hvað mér finnst skemmtilegt.</h2>
                </div>
                </div>
                </div>

                <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <span className="icon">
                        <i className="icon-bulb" />
                    </span>
                <div className="desc">
                    <h3>Vefsíðugerð </h3>
                        <p>Mér finnst viðmóts- og framendaforritun skemmtlegust. Ég hef reynslu af JavaScript, HTML, CSS og er að skrifa þessa síðu í React.</p>
                </div>
                </div>
                </div>
                </div>
                
                <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                    <span className="icon">
                        <i className="icon-phone3" />
                    </span>
                        <div className="desc">
                            <h3>Gæðastjórnun</h3>
                            <p>Ég hef miklar skoðannir á hvað sé góð og hvað sé slæm síða. Mér finnst mikilvægt að vefir virki vel og hratt og séu aðgengilegir og einfaldir. </p>
                        </div>
                </div>
                </div>
                
                <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                    <span className="icon">
                        <i className="icon-data" />
                    </span>
                <div className="desc">
                    <h3>Verkenfastjórnun</h3>
                        <p>Ég hef reynslu af stjórnendastöðum. Ég vil hafa gott skipulag og góða yfirsýn á verkenfum.</p>
                </div>
                </div>
                </div>
            </section> 
        </div>   
    )
  }
}