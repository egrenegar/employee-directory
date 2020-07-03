import React, {Fragment} from 'react';

const style = {
    searchBar: {
        marginBottom: '2rem'
    }
}

function SearchBar(props) {
    return(
        <Fragment>
        <input className="input" type="text" placeholder="Search by name" onChange={props.onChange} style={style.searchBar}/>
        </Fragment>
    );
}
export default SearchBar;