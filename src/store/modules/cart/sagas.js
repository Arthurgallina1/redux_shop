import api from '../../../services/api'
import { call, put, all, select, takeLatest } from 'redux-saga/effects'
import { addToCartSuccess, updateAmount } from './actions';
import history from '../../../services/history';


function* addToCart({ id }) {

    const userExists = yield select(
        state => state.cart.find(u => u.id === id)
    )
    if(userExists){
        const amount = userExists.amount + 1;
        yield put(updateAmount(userExists, amount));
        

    } else {
        const response = yield call(api.get, `users/${id}`);
        const data = { 
            ...response.data,
            amount: 1,  
        }
        yield put(addToCartSuccess(data))   
        history.push('/cart'); 
    }

    

} 
//listeners
export default all([
    takeLatest('ADD_TO_CART_REQUEST', addToCart),
])