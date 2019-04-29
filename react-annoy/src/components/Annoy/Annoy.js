import React from 'react';
import './annoy.css';
import chewing from '../../assets/images/chewing.gif'


const Annoy = (props) => {
    return (
        <div className="annoy-section">
            <h4>A N N O Y S</h4>
            <span className="annoy-logo"><img src={chewing} /></span>
        </div>
    )
}

export default Annoy;