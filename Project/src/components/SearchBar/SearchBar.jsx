import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => {
    if (query === '') setIsOpen(false);
  };

  const handleChange = (e) => setQuery(e.target.value);

  return (
    <div
      className={`search-container ${isOpen ? 'open' : ''} ${query.length > 0 ? 'active' : ''}`}
      onClick={handleFocus}
    >
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      {isOpen ? (
        <input
          type="text"
          className="search-input"
          placeholder="Type to search..."
          value={query}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span className="search-label">Search</span>
      )}
    </div>
  );
};

export default SearchBar;