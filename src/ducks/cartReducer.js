import axios from "axios";

const initialState = {
    cart: [],
    total: 0
};

// types
const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART'

// {
//     type: 'ADD_TO_CART',
//     payload: axios.post(`/api/cart/${id}`)
// }

//action creators

export function getCart() {
    return {
        type: GET_CART,
        payload: axios.get("/api/cart").then(res => res.data)
    }
}


export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        payload: axios.post(`/api/cart/${id}`).then(res => res.data)
    }
}

// get items from cart GET request
// axios.get('/api/cart').then(response => {
//     this.setState({
//         cart: [...this.state.cart, response.data.cart],
//         total: response.data.total
//     })
// })

// add items to cart POST request
// axios.post(`/api/cart/${id}`).then(response => {
//     console.log("hit")
// })

export default function reducer(state = initialState, action) {
    const { type } = action;
    console.log(action);
    switch (type) {
        case `GET_CART_FULFILLED`:
            console.log("GETCART: ", action.payload)
            return {
                ...state,
                cart: action.payload.cart,
                total: action.payload.total
            }
        case `${ADD_TO_CART}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${ADD_TO_CART}_FULFILLED`:
            console.log("ACTION: ", action.payload);
            return {
                ...state,
                isLoading: false,
                cart: action.payload.cart,
                total: action.payload.total,
                address: action.payload.address
            };
        default:
            return state;
    }
}