import React, { useState } from "react";
import { connect } from "react-redux";

import "./search.scss";
import { getAddress } from "../../consumers/search";

const Search = props => {
  const [search, setSearch] = useState("");

  console.log(search);
  return (
    <div>
      <input
        id="pac-input"
        className="controlls"
        type="text"
        placeholder="Enter your delivery address"
        value={search}
        onChange={e => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

const mapStateToProps = reduxState => reduxState;

export default connect(
  mapStateToProps,
  { getAddress }
)(Search);
