import React, {Component} from 'react';
import '../css/photos.css';
import {NavLink} from 'react-router-dom';

class text extends Component {
    render(){
        return(
            <div>
                <p>
                    Hugrún og Jóhanna hafa verið óaðskiljanlegar síðan sumarið 2017.
                </p>
                <NavLink exact to = "/hugga"> Klikka hér </NavLink>
            </div>
        )
    }

}
export default text;