import { default as a } from "../actions";

import axios from "axios";

const initialState = {
    cart: [],
    total: 0
};

//action creators

// get items from cart GET request

// add items to cart POST request


export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        default:
            return state;
    }
}
