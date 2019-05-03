import React from 'react';
import './annoy.css';
import chewing from '../../assets/images/chewing.gif';
import Joke from './Joke';


const Annoy = (props) => {
    const { annoys } = props;
    return (
        <div className="annoy-section">
            <h4>A N N O Y S</h4>
            <span className="annoy-logo"><img src={chewing} /></span>
            <Joke />
            <ul>
            {
                annoys.map(annoy => {
                    return (
                        <li><i>{annoy}</i></li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Annoy;