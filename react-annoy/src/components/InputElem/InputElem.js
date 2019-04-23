import React from 'react';

const InputElem = (props) => {
    let username;
    return (
        <>
            { props.focus === props.elid
                ? <legend>{props.fieldname?props.fieldname:props.elid}</legend>
                : null
            }   
            { props.loading
                ? <legend>Loading...</legend>
                : null
            }  
            <input autoComplete="off" id={props.elid} type={props.eltype} 
            placeholder={(props.focus === props.elid && props.eltype !== 'password')?'':props.placeholder} 
            onFocus={props.focusme} ref={(input) => username = input} onBlur={() => props.blurme(props.elid)}/> 
        </>
    )
}

export default InputElem;