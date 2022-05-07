import React, { useEffect, useState } from "react";
import "../Styles/search.css";
import { searchBook } from "../api/index";
import TextField from "@mui/material/TextField";

const Searchbar = () => {
  // SEARCH BOOKS

  //Store data into state variable.
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    searchBook(searchInput).then((data) => {
      console.log(data);
      setSearchData(data);
    });
  }, [searchInput]);

  return (
    <div className="search_container">
      <TextField
        id="standard-search"
        label="Search book"
        type="search"
        variant="standard"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {/* <input type="text"></input>
      <Search className="search_style">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Search…"
          // inputProps={{ "aria-label": "search" }}
          value={searchInput}
          onKeyUp={(e) => setSearchInput(e.target.value)}
        />
      </Search> */}
    </div>
  );
};

export default Searchbar;
