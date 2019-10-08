import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import Sidebar from './components/sidebar'
import Home from './components/home'
import About from './components/about'
import Education from './components/education'
import Experience from './components/experience'
//import {Route, Switch, withRouter} from 'react-router-dom';
//import home from './routes/home/home';
//import hugga  from './routes/hugga/hugga';


class App extends Component {
    render() {
        return(
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar></Sidebar>
				        <div id="colorlib-main">
					        <Home></Home>
					        <About></About>
                            <Education></Education>
                            <Experience></Experience>
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