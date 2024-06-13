import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    navigate('/search-results');
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
