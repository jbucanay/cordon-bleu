import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import "./search.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import getAddress from "../../consumers/search";
import axios from "axios";

const Search = props => {
  const [search, setSearch] = useState("");
  const [local, setLocal] = useState([]);

  useEffect(() => {
    async function fetchAddress() {
      console.log(search);
      const address = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${search}&types=address&key=AIzaSyAdBDNAgusDJuoZaYwHN19SKgyZWr_lXqs`
      );

      setLocal(address);
    }
    fetchAddress();
  }, [search]);

  console.log(local);
  return (
    <div className="search-div">
      <div className="search-wrapper">
        <InputGroup>
          <div>
            <InputGroupAddon addonType="prepend">
              <Button className="search-globe-button">
                <i className="fas fa-map-marker-alt" />
              </Button>
            </InputGroupAddon>
          </div>
          <div>
            <Input
              placeholder="Enter your delivery address"
              className="search-input"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div>
            <InputGroupAddon addonType="append">
              <Button className="search-find-button">Find Restaurants</Button>
            </InputGroupAddon>
          </div>
        </InputGroup>
      </div>
    </div>
  );
};

const mapStateToProps = reduxState => reduxState;

export default connect(
  mapStateToProps,
  { getAddress }
)(Search);
