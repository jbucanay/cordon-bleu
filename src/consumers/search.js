import { default as a } from "../actions";

const initialAddress = {
  address: ""
};

export function getAddress(search) {
  return {
    type: a.SEARCH,
    payload: search
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

    default:
      return state;
  }
}
