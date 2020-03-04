import api from '../../../services/api'
import { call, put, all, takeLatest } from 'redux-saga/effects'

import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
    const response = yield call(api.get, `users/${id}`);
    yield put(addToCartSuccess(response.data))    

}
//listeners
export default all([
    takeLatest('ADD_TO_CART_REQUEST', addToCart),
])