import React, { useState } from 'react';

const SearchBar=({onSBFormSubmit})=>{
  const [term, setTerm] = useState('');

  const onFormSubmit=(e)=>{
    e.preventDefault();
    onSBFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search for a Video</label>
          <input 
            type="text" 
            value={term}
            onChange={(event)=>setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;