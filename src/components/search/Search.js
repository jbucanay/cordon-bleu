import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import "./search.scss";
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
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button color="primary">
            <i className="fas fa-map-marker-alt" />
          </Button>
        </InputGroupAddon>
        <Input
          placeholder="Enter your delivery address"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button color="primary">Find Restuarants</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

const mapStateToProps = reduxState => reduxState;

export default connect(
  mapStateToProps,
  { getAddress }
)(Search);
