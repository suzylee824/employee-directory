import React from "react";
import "./style.css";

function SearchForm(props) {
  return (

    <nav className="navbar navbar-light">
    <form className="form-inline">
        <input 
          className="form-control mr-sm-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search" 
          onChange={e=> {
            props.search(e.target.value)
          }} />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </nav>
  );
}

export default SearchForm;
