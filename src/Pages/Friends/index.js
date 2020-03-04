import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
// import { bindActionCreators } from 'redux'
import { Container, ProductTable } from './styles';
import * as CartActions from '../../store/modules/cart/actions';


function Friends({ cart, addfriend }) {

        function handleAddFriend(user){
            addfriend(user)            

        }

        return (
          
                // <Container>
                //     <ProductTable>
                //     <thead>
                //         <tr>
                //             <th>Name</th>
                //             <th>Email</th>
                //             <th>Amount</th>
                //             <th>Concat</th>
                //             <th>x</th>
                //         </tr>
                //     </thead>
                //     <tbody>
                //         {
                //           cart.map(user => (
                //               <tr key={user.id}>
                //                   <td>{user.name}</td>
                //                   <td>{user.email}</td>
                //                   <td>
                //                     <button type="button" onClick={() => handleAddFriend(user)}>-</button>
                //                     {user.amount}
                //                     <button type="button" >+</button>
                //                   </td>
                //                   {/* <td> <button type="button" onClick={() => dispatch(CartActions.removeFromCart(user)) }>X</button></td> */}
                //           <td>{  user.contact } </td>
                //                   <td> <button type="button" >X</button></td>
                //               </tr>
                //           ))  
                          
                //         }
                //         <tr>
                //             <td>No. #Contacts: </td>
                //         </tr>
                //     </tbody>
                //     </ProductTable>
                // </Container>
                <>
                </>
            )
}


const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Friends);