import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  console.log("location : ", location);

  useEffect(() => {
    console.log("search result : ", query);
  }, [query]);

  return (
    <div>
      <h1>search result page</h1>
      <p>search command : {query}</p>
    </div>
  );
};

export default SearchResults;
