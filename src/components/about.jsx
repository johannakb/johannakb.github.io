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
                                    <span className="heading-meta">Um mig</span>
                                    <h2 className="colorlib-heading">Hver er ég?</h2>
                                    <p>Ég útskrifaðist sem tölvunarfræðingur frá Háskóla Íslands síðastliðið vor. Ég er mjög jákvæð, hress, félagslynd og á auðvelt með samskipti. Ég elska gott skipulag en get líka verið sveigjanleg og fljót að tileinka mér nýja hluti. Ég get unnið undir álagi og líður best þegar það er nóg að gera.  </p>
                                    <p>Ég er mjög félagslynd og sinni félagslífinu af krafti. Ég sat í fráfarandi stjórn Nörd, nemendafélagi tölvunar- og hugbúnaðaverkfræðinema sem hagsmunafulltrúi. Einnig er ég ein af stofnendum Ada, hagsmunafélags fyrir konur í upplýsingatækni við HÍ, þar sem helsta markmiðið okkar er að fá fleiri konur í námið og fækka brottföllum meðal kvenna.</p>
                                    <p>Ég er núna að leita mér að framtíðarstarfi þar sem ég get nýtt þá kunnáttu sem ég hef öðlast í mínu námi. Ég vil halda áfram að læra og verða betri forritari. </p>
                                    <p>Ég hef einna helst áhuga á eftirfarandi:</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <div className="row">
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                        <div className="services color-1">
                                            <span className="icon2"><i className="icon-bulb" /></span>
                                            <h3>Framendaforritun</h3>
                                        </div>
                                    </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                    <div className="services color-2">
                                        <span className="icon2"><i className="icon-globe-outline" /></span>
                                        <h3>Viðmótsforritun</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                    <div className="services color-3">
                                        <span className="icon2"><i className="icon-data" /></span>
                                        <h3>Verkefnastýringu</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                    <div className="services color-4">
                                        <span className="icon2"><i className="icon-phone3" /></span>
                                        <h3>Gæðastjórnun</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>   
    )
  }
}