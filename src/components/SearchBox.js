import React from "react";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
      className="bg-blue-50 shadow rounded-r border-1 px-3 py-1 search"
    />
  );
};

export default SearchBox;
