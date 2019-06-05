import { default as a } from "../actions";

import axios from "axios";

const initialAddress = {
  address: "",
  eatery: []
};

export function getAddress(search) {
  return {
    type: a.SEARCH,
    payload: search
  };
}

export function getFood(obj) {
  return {
    type: a.GETEATERY,
    payload: axios.post("/api/restaurant", { obj })
  };
}

export default function reducer(state = initialAddress, action) {
  const { type, payload } = action;
  switch (type) {
    case a.SEARCH:
      return {
        ...state,
        address: payload
      };
    case `${a.GETEATERY}_FULFILLED`:
      return {
        ...state,
        eatery: payload.data
      };
    default:
      return state;
  }
}
