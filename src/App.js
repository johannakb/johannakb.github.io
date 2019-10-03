import React, {Component} from 'react';
import {connect} from 'react-redux';
//import Sidebar from "./components/Sidebar.1";
import Home from './components/home'
import About from './components/about'
//import Education from '/components/education'
//import {Route, Switch, withRouter} from 'react-router-dom';
//import home from './routes/home/home';
//import hugga  from './routes/hugga/hugga';


class App extends Component {
    render() {
        return(
            <div id="colorlib-page">
                <div id="container-wrap">
				        <div id="colorlib-main">
					        <Home></Home>
					        <About></About>
          	            </div>
            	</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    }
}

export default App;