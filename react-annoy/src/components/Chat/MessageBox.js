import React, { useState } from 'react';
import InputElem from '../InputElem';

const MessageBox = (props) => {
    const [focus, setfocus] = useState(false);
    const sendmessage = (e) => {
        
        if (e.keyCode === 13) {
            e.preventDefault();
            debugger;
            props.sendMessage({ message: e.target.value, sender: 'Alfie'});
        }  
    }
    return (
        <div className="msg-box">
                <form onSubmit={props.sendmessage}>
                    <fieldset className="">
                        {focus
                            ?<legend>Message</legend>
                            :null
                        }                        
                        <input type="text" name="message-box" placeholder={!focus?"Enter Message and hit Enter":null} onFocus={() => setfocus(true)} 
                        onBlur={() => setfocus(false)} onKeyDown={(e) => sendmessage(e)}/>
                        {/* <InputElem elid="username" placeholder="Enter message and press Enter" focusme={props.focusme} 
                        blurme={props.blurme} eltype="text" loading={props.loading} focus={props.focus} 
                        fieldname="message-input"/>                                        */}
                    </fieldset>
                    {/* <div className="grid-container-2 login-links">
                        <span className="action-btn"><button onClick={(e) => {e.preventDefault();props.sendmessage()}}>Send</button></span>
                    </div> */}
                </form>
        </div>
    )
}

export default MessageBox;