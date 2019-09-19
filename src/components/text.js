import React, {Component} from 'react';
import '../css/photos.css';
import {NavLink} from 'react-router-dom';

class text extends Component {
    render(){
        return(
            <div>
                <p>
                    Ég heiti Jóhanna og er tölvunarfræðingur.
                </p>
                <NavLink exact to = "/hugga"> Klikka hér </NavLink>
            </div>
        )
    }

}
export default text;