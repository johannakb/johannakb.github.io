import React, {Component} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {Route, Switch, withRouter} from 'react-router-dom';
import home from './routes/home/home';
import hugga  from './routes/hugga/hugga';

class App extends Component {
    render() {
        return(
            <main>
                <Helmet defaultTitle = "Portfolio Jóhönnu" titleTemplate = "% - Jóhanna"/>

                <div>
                    <Switch location = {this.props.location}>
                        <Route path = "/" exact component = {home} /> 
                        <Route path = "/hugga" exact component = {hugga} />                    
                    </Switch>
                </div>

            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    }
}

export default withRouter(connect(mapStateToProps)(App));