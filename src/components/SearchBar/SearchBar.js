import React, { useContext } from "react";
import "./SearchBar.css";
import SearchIcon from "../../assets/icon-search.svg";
import { DataContext } from "../../App";

const SearchBar = () => {
  const DataObject = useContext(DataContext);

  const OnChangeHandler = (e) => {
    const searchInput = e.target.value.toLowerCase();
    const filteredData = DataObject.OriginalData.map((record) => {
      if (searchInput === "" || record.title.toLowerCase().includes(searchInput)) {
        return record;
      } else {
        return null; // Filter out items that don't match the search
      }
    }).filter(item => item !== null);

    DataObject.SetDataHandler(filteredData);
  };

  return (
    <div id="SearchBar">
      <img src={SearchIcon} id="SearchIcon" alt="Search Icon" />
      <input
        id="SearchInputField"
        placeholder="Search for movies or TV series"
        onChange={OnChangeHandler}
      ></input>
    </div>
  );
};

export default SearchBar;
