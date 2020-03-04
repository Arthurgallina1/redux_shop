import React from 'react'
import { connect } from 'react-redux'
import { Container, ProductTable } from './styles';
import { bindActionCreators } from 'redux'
import * as CartActions from '../../store/modules/cart/actions';


function Cart({ total, cart, removeFromCart, updateAmount }) {

    function increment(user) {
        
        
        updateAmount(user, user.amount + 1);

    }

    function decrement(user) {
        updateAmount(user, user.amount - 1);

    }


    return (
        <Container>
            <ProductTable>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Amount</th>
                    <th>Concat</th>
                    <th>x</th>
                </tr>
            </thead>
            <tbody>
                {
                  cart.map(user => (
                      <tr key={user.name}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            <button type="button" onClick={() => decrement(user)}>-</button>
                            {user.amount}
                            <button type="button" onClick= {() => (increment(user)) }>+</button>
                          </td>
                          {/* <td> <button type="button" onClick={() => dispatch(CartActions.removeFromCart(user)) }>X</button></td> */}
                  <td>{  user.contact } </td>
                          <td> <button type="button" onClick={() => (removeFromCart(user)) }>X</button></td>
                      </tr>
                  ))  
                  
                }
                <tr>
                    <td>No. #Contacts: {total}</td>
                </tr>
            </tbody>
            </ProductTable>
        </Container>
    )
}
const mapStateToProps = state => ({
    // cart: state.cart
    cart: state.cart.map(user => ({
        ...user,
        contact: user.name+user.email
    })),
    total: state.cart.length
})

const mapDispatchToProps = dispatch => bindActionCreators( CartActions ,dispatch);

export default  connect(mapStateToProps, mapDispatchToProps)(Cart);