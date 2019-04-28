import React, { useState } from 'react';
import InputElem from '../InputElem';
import './chat.css'

const MessageBox = (props) => {
    const { user, sendMessage } = props;
    const [state, setState] = useState({ focus : false, msg : '' });
    const sendmessage = (e) => {
        
        if (e.keyCode === 13) {
            e.preventDefault();
            debugger;
            sendMessage({ message: e.target.value, sender: user});
            e.target.value = '';
        }
        else {

        } 
    }

    const handleChange = (event) => {
        debugger;
        setState({msg : event.target.value})
        //sendMessage({ message: state.msg, sender: user});
    }
    return (
        <div className="msg-box">
                <form onSubmit={props.sendmessage}>
                    <fieldset className="">
                        {state.focus
                            ?<legend>Message</legend>
                            :null
                        }                        
                        <input autoComplete="off" type="text" name="message-box" placeholder={!(state.focus)?"Enter Message and hit Enter":null} onFocus={() => setState({focus : true})} 
                        onBlur={() => setState({focus : false})} onKeyDown={(e) => sendmessage(e)} value={state.msg} onChange={handleChange}/>
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