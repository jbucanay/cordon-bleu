import axios from "axios";

const initialState = {
  cart: [],
  total: 0
};

// types
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";

//action creators

export function getCart() {
  return {
    type: GET_CART,
    payload: axios.get("/api/cart").then(res => res.data)
  };
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: axios.post(`/api/cart/${id}`).then(res => res.data)
  };
}

export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: axios.delete(`/api/cart/${id}`).then(res => res.data)
  };
}

export default function reducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case `GET_CART_FULFILLED`:
      return {
        ...state,
        cart: action.payload.cart,
        total: action.payload.total
      };
    case `${ADD_TO_CART}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${ADD_TO_CART}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        cart: action.payload.cart,
        total: action.payload.total,
        address: action.payload.address
      };
    case `${DELETE_FROM_CART}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${DELETE_FROM_CART}_FULFILLED`:
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
