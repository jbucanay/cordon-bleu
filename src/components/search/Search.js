import React, { useState } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import "./search.scss";

const Search = () => {
  const [search, setSearch] = useState("");

  console.log(search);
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

export default Search;
