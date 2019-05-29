import { default as a } from "../actions";

const initialAddress = {
  address: "",
  lat: "",
  lng: ""
};

export function getAddress(search) {
  return {
    type: a.SEARCH,
    payload: search
  };
}

export function getLaLo(obj) {
  return {
    type: a.LATLONG,
    payload: obj
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
    default:
      return state;
  }
}
