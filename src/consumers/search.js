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
    payload: axios.post("/api/test", { obj })
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
    case a.LATLONG:
      return {
        ...state,
        lat: payload.lat,
        lng: payload.lng
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
