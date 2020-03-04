import React from 'react'
import { Container, Cart } from './styles'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



function Header( { cart } ) {
    // console.log(cart.length)
    return (
        <Container>
            <Link to ="/"><h3> Logo </h3></Link>
            <Cart to ="/cart"><h3> Contact List ({cart.length}) </h3></Cart>
{/* 
            <Cart to="/cart">
                <>
                    <strong> Meu carrinho </strong>
                    <span>3 itens</span>
                </>
            </Cart> */}
         </Container>
    )
}
export default connect(state => ({
    cart: state.cart,
}))(Header);