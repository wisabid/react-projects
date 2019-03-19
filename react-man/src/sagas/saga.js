import { takeEvery, takeLatest, put, delay } from 'redux-saga/effects';


function* showpassAsync(props) {
    debugger;
    yield put({type : 'loading'})
    yield delay(2000);
    yield put({type : 'showpassfield', id : props.id})
}

export function* watchLogin() {
    yield takeLatest('showpass', showpassAsync)
}