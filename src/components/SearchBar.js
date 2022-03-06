import React from 'react';

class SearchBar extends React.Component {
  state={term:''};

  onTermChange=(event)=>{
    // console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  onFormSubmit=(e)=>{
    e.preventDefault();
    // Call callback from parent component
    this.props.onSBFormSubmit(this.state.term);
  }

  render(){
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text" 
              value={this.state.term}
              onChange={this.onTermChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;