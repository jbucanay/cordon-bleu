import Axios from "axios";

const SEARCH = "SEARCH";
const MYADDRESS = "MYADDRESS";

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
  const { type, payload } = action;
  switch (type) {
    case SEARCH:
      console.log(payload);

    default:
      return state;
  }
}
