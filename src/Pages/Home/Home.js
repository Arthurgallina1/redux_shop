import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductList } from './styles';
import { bindActionCreators } from 'redux'
import api from '../../services/api'
import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {

        state = {
            users: [],
        };
        async componentDidMount() {
            const response = await api.get('users');
            this.setState({ users: response.data })
            
            
        }

        handleAddUser(user) {
            // const { dispatch } = this.props;
            // dispatch(CartActions.addToCart(user));
            
            const { addToCart } = this.props;
            addToCart(user);

        };


        render (){
            const { users } = this.state;
            return (
                <ProductList>
                    {
                        users.map(user => (
                          < li key={user.id}>
                            <strong>{user.name}</strong> 
                            <span>{user.email} </span> 
                            <button type="button" onClick={() => this.handleAddUser(user)}> <span> Add to List </span> </button>

                          </li>
                        ))


                    }
                
                </ProductList>
            )
           
        }
}
//convert redux actions into comp. props
const mapDispatchToProps = dispatch => bindActionCreators( CartActions ,dispatch);

//connect returns another function, its been called with Home.
export default connect(null, mapDispatchToProps)(Home);