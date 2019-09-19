import React, { Component } from 'react';
import Photo from '../../components/photo'
import Text from '../../components/text';
import Header from '../../components/header';

class Home extends Component {
  render() {
    	return (
    		<div>
	      <body id="page-top">
            <Header/>
            <Photo/>
            <Text/>

	      </body>

	      </div>
	    );
		}
    
}

export default Home;