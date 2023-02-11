import React from "react";
import './recipe.css'
const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="search-container">
            <input 
                value={query}
                className="search-box"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
            <input
                disabled={isLoading || !query}
                type="submit"
                className="btn-search"
                value="Search"
            />
            </div>
        </form>
    )
};

export default SearchBar;