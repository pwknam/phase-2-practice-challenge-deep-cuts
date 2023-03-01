import React from 'react'

function Search({handleSearchChange}) {
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search