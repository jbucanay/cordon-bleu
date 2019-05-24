import Axios from "axios";

const SEARCH = "SEARCH";

const initialAddress = {
  address: []
};

export function getAddress(search) {
  return {
    type: SEARCH,
    payload: Axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${search}&types=address&key=AIzaSyAdBDNAgusDJuoZaYwHN19SKgyZWr_lXqs`
    )
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
