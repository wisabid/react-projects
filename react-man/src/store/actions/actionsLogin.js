export const showpassAsync = (id) => {
    return {type : 'showpass', id : id};
}

const showloading = () => {
    return {type : 'loading'}
}

export const showpass = (id) => {
    return dispatch => {
        dispatch(showloading());
        setTimeout(() => {
            dispatch(showpassAsync(id))
        }, 2000);
    }
}