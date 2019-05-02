import React from 'react';
import './annoy.css';
import chewing from '../../assets/images/chewing.gif';
import Joke from './Joke';


const Annoy = (props) => {
    return (
        <div className="annoy-section">
            <h4>A N N O Y S</h4>
            <span className="annoy-logo"><img src={chewing} /></span>
            <Joke />
        </div>
    )
}

export default Annoy;