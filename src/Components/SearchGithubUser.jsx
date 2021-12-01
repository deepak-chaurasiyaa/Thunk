import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/usefetch"

export default function() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, data, error } = useFetch(
    `https://api.github.com/search/users?q=${query || "deepak"}&&page=${page}`
  );
  console.log(loading, data, error, page);

  const handlePageChange = value => {
    if (page + value < 1) {
      return false;
    }
    setPage(page + value);
  };

  return (
    <div>
      <input onChange={e => setQuery(e.target.value)} />
      <br />
      <button onClick={() => handlePageChange(-1)}> PREV </button>
      <button onClick={() => handlePageChange(1)}> NEXT </button>
      <br />
      {loading && "LOADING"}
      {!loading &&
        data &&
        data.items.map(item => <div key={item.id}> {item.login} </div>)}
    </div>
  );
}
