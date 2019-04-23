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
        debugger;
        // params.webS.waitForConnection(() => params.webS.send(JSON.stringify({type : 'NEW_MESSAGE', data : {message : 'dfgdfgdfgdfgdfg'}})))   
    })
}