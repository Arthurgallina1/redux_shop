export function addToCart(user) {
    return {
        type: 'ADD_TO_CART',
        user
    }
}

export function removeFromCart(user) {
    return {
        type: 'REMOVE_FROM_CART',
        name: user.name
    }
}

export function updateAmount(user, amount ) {
    return {
        type: 'UPDATE_AMOUNT',
        name: user.name,
        amount
    }
}