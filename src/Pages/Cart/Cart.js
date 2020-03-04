import React from 'react'
import { connect } from 'react-redux'
import { Container, ProductTable } from './styles';
import * as CartActions from '../../store/modules/cart/actions';


function Cart({ cart, dispatch }) {
    return (
        <Container>
            <ProductTable>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Amount</th>
                    <th>x</th>
                </tr>
            </thead>
            <tbody>
                {
                  cart.map(user => (
                      <tr key={user.name}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.amount}</td>
                          <td> <button type="button" onClick={() => dispatch(CartActions.removeFromCart(user)) }>X</button></td>
                      </tr>
                  ))  
                }
            </tbody>
            </ProductTable>
        </Container>
    )
}
const mapStateToProps = state => ({
    cart: state.cart,
})

export default  connect(mapStateToProps)(Cart);