import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as CartActions from '../../store/modules/cart/actions';
import { ProductList } from './styles';
import api from '../../services/api'
import { toast } from 'react-toastify';

class Home extends Component {

        state = {
            users: [],
        };
        async componentDidMount() {
            const response = await api.get('users');
            this.setState({ users: response.data })
            
            
        }

        handleAddUser(id) {
            // const { dispatch } = this.props;
            // dispatch(CartActions.addToCart(user));
            const { addToCartRequest } = this.props;
            addToCartRequest(id); 
            toast.success(`${id} added to your contact list!`);
            this.props.history.push('/cart');
           
        };


        render (){
            const { users } = this.state;
            const { amount = 0 } = this.state;
            return (
                <ProductList>
                    {
                        users.map(user => (
                          < li key={user.id}>
                            <strong>{user.name}</strong> 
                            <span>{user.email} </span> 
                            <button type="button" onClick={() => this.handleAddUser(user.id)}> <strong>{ amount[user.name]  }</strong> <span> Add to List </span> </button>
                            
                          </li>
                        ))


                    }
                
                </ProductList>
            )
           
        }
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, user) => {
        amount[user.name] = user.amount;

        return amount;
    },{})
});

//convert redux actions into comp. props
const mapDispatchToProps = dispatch => bindActionCreators( CartActions ,dispatch);

//connect returns another function, its been called with Home.
export default connect(mapStateToProps, mapDispatchToProps)(Home);