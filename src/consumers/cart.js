// import axios from "axios";

// const initialState = {
//   cart: [],
//   total: 0
// };

// //action creators
// const ADD_TO_CART = "ADD_TO_CART";

// // {
// //     type: 'ADD_TO_CART',
// //         payload: axios.post(`/api/cart/${id}`)
// // }

// export function addToCart() {
//   return {
//     type: "ADD_TO_CART",
//     payload: ADD_TO_CART
//   };
// }

// // get items from cart GET request
// axios.get("/api/cart").then(response => {
//   this.setState({
//     cart: [...this.state.cart, response.data.cart],
//     total: response.data.total
//   });
// });

// // add items to cart POST request
// axios.post(`/api/cart/${id}`).then(response => {
//   console.log("hit");
// });

// export default function reducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case `${ADD_TO_CART}_PENDING`:
//       return {
//         ...state,
//         isLoading: true
//       };
//     case `${ADD_TO_CART}_FULFILLED`:
//       return {
//         ...state,
//         isLoading: false,
//         cart: action.payload.data
//       };
//     default:
//       return state;
//   }
// }
