import React, {Component} from 'react';

export default class Experience extends Component {
    render() {
      return (
  
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">Starfsreynsla</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <div className="fancy-collapse-panel">
                  <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Roðasalir, 2012-2019
                          </a>
                        </h4>
                      </div>
                      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div className="panel-body">
                          <div className="row">
                            <div className="col-md-6">
                              <p>Roðasalir er sambýli fyrir aldraða með heilabilun. Ég hef unnið þar í tæp átta ár.</p>
                              <p>Ég hef bæði unnið á sumrin og á veturnar með skóla. Síðastliðin tvö ár hef ég aðallega unnið á næturvöktum.</p>
                            </div>
                            <div className="col-md-6">
                              <ul>
                                <li>Efla samskipti sem einkennast af virðingu, skilningi, hlýju, trausti og gagnsemi.</li>
                                <li>Viðhalda andlegri, líkamlegri og félagslegri færni íbúa sem og virðingu, sjálfsmynd og sjálfsáliti.</li>
                                <li>Veita íbúum öryggi og vellíðan.</li>
                            </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Veislulist, Skútan, 2007-2012
                          </a>
                        </h4>
                      </div>
                      <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Skútan eða Veislulist er fjölskyldufyrirtæki stofnað af ömmu og afa fyrir meira en 40 árum.</p>
                          <p>Ég byrjaði 13 ára að vinna. Annars vegar var ég látin sjá um köldu réttina svo sem heilsurétti og snittur. Hins vegar stóð ég vaktina við uppvaskið.</p>
                        </div>
                        <div className="col-md-6">
                              <ul>
                                <li>Aðstoða matreiðslumenn, og undirbúa mat.</li>
                                <li>Fylgja ströngum hreinlætis-, heilsu-, og öryggisreglum.</li>
                                <li>Fylgja leiðbeiningum og framkvæma verkefni fljótt og vel.</li>
                                <li>Sjá um að hreinsa eldhúsið, þ.e. þvo eldhúsbúnað og  vinnusvæði.</li>
                                <li>Nota frumkvæði og vinna í teymum.</li>
                            </ul>
                            </div>
                      </div>
                      </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      )
    }
  }