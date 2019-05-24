import axios from "axios";

const SEARCH = "SEARCH";

const initialAddress = {
  address: []
};

export function getAddress(search) {
  return {
    type: SEARCH,
    payload: axios.get("/api/usersearch", { search })
  };
}

export default function reducer(state = initialAddress, action) {
  switch (action.type) {
    case `${SEARCH}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        address: action.payload
      };

    default:
      return state;
  }
}
