import React from 'react';

const translate = (props) => {
    return props;
}

export default (wrappedLoginComponent) => {
    return function wrappedRender(props) {
        return wrappedLoginComponent(translate(props))
    }
}