import React, {useEffect} from 'react';
import './annoy.css';
import chewing from '../../assets/images/chewing.gif';
import Joke from './Joke';


const Annoy = (props) => {
    const { annoys, typingusers } = props;
    useEffect(() => {
        console.table(typingusers);
    })
    
    return (
        <div className="annoy-section">
            <h4>A N N O Y S</h4>
            <Joke />
            <span className="annoy-logo"><img src={chewing} /></span>
            
            <h5>ROFL</h5>
            <ul>
            {
                annoys.map(annoy => {
                    return (
                        <li><i>{annoy}</i></li>
                    )
                })
            }
            </ul>
            <h5>Typists</h5>
            <ul>
            {
                typingusers.map(user => {
                    return (
                        <li><i>{user} is typing ...</i></li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Annoy;