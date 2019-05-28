import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import "./search.scss";
<<<<<<< HEAD
// import "bootstrap/dist/css/bootstrap.min.css";
import getAddress from "../../consumers/search";
import axios from "axios";
=======
import { getAddress } from "../../consumers/search";
>>>>>>> master

const Search = props => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.getAddress(search);
  }, [search]);
  return (
    <div>
      <GooglePlacesAutocomplete
        onSelect={({ description }) => {
          setSearch(description);
        }}
        placehoder={"Enter your delivery address"}
      />
    </div>
  );
};

const mapStateToProps = reduxState => reduxState;

export default connect(
  mapStateToProps,
  { getAddress }
)(Search);
