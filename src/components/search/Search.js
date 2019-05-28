import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import "./search.scss";
import { getAddress } from "../../consumers/search";

const Search = props => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.getAddress(search);
  }, [search]);
  return (
    <div className="places-search-bar">
      <GooglePlacesAutocomplete
        onSelect={({ description }) => {
          setSearch(description);
        }}
        placeholder={"Enter your delivery address"}
      />
    </div>
  );
};

const mapStateToProps = reduxState => reduxState;

export default connect(
  mapStateToProps,
  { getAddress }
)(Search);
