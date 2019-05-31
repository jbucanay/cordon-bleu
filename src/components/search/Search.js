import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Redirect } from "react-router-dom";
import { getFood } from "../../consumers/search";

import "./search.scss";
import { getAddress } from "../../consumers/search";

const Search = props => {
  const [search, setSearch] = useState("");

  useEffect((props) => {
    props.getAddress(search);
    geocodeByAddress(search)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        props.getFood({ lat, lng });
      });
  }, [search]);

  return (
    <div className="places-search-bar">
      <h1 className="delivering-good-vibes">Delivering good vibes</h1>
      {search && <Redirect to="/restaurants" />}
      <GooglePlacesAutocomplete
        onSelect={({ description }) => {
          setSearch(description);
        }}
        placeholder={"📍 Enter your delivery address"}
      />
    </div>
  );
};

const mapStateToProps = reduxState => reduxState;

export default connect(
  mapStateToProps,
  { getAddress, getFood }
)(Search);
