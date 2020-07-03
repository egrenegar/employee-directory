import React, {Fragment} from 'react';

function SearchBar(props) {
    return(
        <Fragment>
        <input className="input" type="text" placeholder="Search" onChange={props.onChange}/>
        <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true"></i>
        </span>
        </Fragment>
    );
}
export default SearchBar;