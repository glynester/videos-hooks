import React, { useState } from 'react';

const SearchBar=({onSBFormSubmit})=>{
  const [term, setTerm] = useState('');

  // const onTermChange=(event)=>{
  //   // this.setState({term: event.target.value})
  //   setTerm(event.target.value);
  // }

  const onFormSubmit=(e)=>{
    e.preventDefault();
    // Call callback from parent component
    // this.props.onSBFormSubmit(this.state.term);
    onSBFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      {/* <form onSubmit={this.onFormSubmit} className="ui form"> */}
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input 
            type="text" 
            // value={this.state.term}
            value={term}
            // onChange={this.onTermChange}
            onChange={(event)=>setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

// class SearchBar extends React.Component {
 
//   render(){
//     return (
//       <div className="search-bar ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Video Search</label>
//             <input 
//               type="text" 
//               value={this.state.term}
//               onChange={this.onTermChange}
//             />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

export default SearchBar;