export function addToCartRequest(id) {
    return {
        type: 'ADD_TO_CART_REQUEST',
        id,
    }
}

export function addToCartSuccess(user) {
    return {
        type: 'ADD_TO_CART_SUCCESS',
        user,
    }
}

export function removeFromCart(user) {
    return {
        type: 'REMOVE_FROM_CART',
        name: user.name
    }
}

export function addfriend(user) {
    return {
        type: 'ADD_FRIEND',
        user
    }
}

export function updateAmount(user, amount) {
        
    return {
        type: 'UPDATE_AMOUNT',
        user,
        amount
    }
}

