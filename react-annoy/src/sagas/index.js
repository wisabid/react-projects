import { takeEvery, takeLatest, put, delay, cancel } from 'redux-saga/effects';

function* showpassAsync(props) {
    // if (props.id) {
    //     yield cancel({type : 'blurme'})
    // }
    // yield put({type : 'blurme'})
    // yield cancel({type : 'blurme'})
    yield put({type : 'loading'})
    yield delay(500);
    yield put({type : 'showpassfield', id : props.id})
}

function* blurupdate(props) {
    yield put({type : 'blurme'})
}

export const handleApp = function* (params) {
    yield takeLatest('blur', blurupdate)
    yield takeLatest('showpass', showpassAsync)
    yield takeEvery('NEW_MESSAGE', action => {
        params.webS.waitForConnection(() => params.webS.send(JSON.stringify({type : 'NEW_MESSAGE', data : {message : action.payload.message, sender : action.payload.sender}})))   
    })
    yield takeEvery('NEW_USER', action => {
        params.webS.waitForConnection(() => params.webS.send(JSON.stringify(action)));
    })

    yield takeEvery('USER_EXIT', action => {
        params.webS.waitForConnection(() => params.webS.send(JSON.stringify(action)));
        params.dispatch({type : 'reset'})
    })

    yield takeLatest('ANNOY', action => {
        params.webS.waitForConnection(() => params.webS.send(JSON.stringify(action)));
    })

    yield takeLatest('TYPING', action => {
        params.webS.waitForConnection(() => params.webS.send(JSON.stringify(action)));
    })
}