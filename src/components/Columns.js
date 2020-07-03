import React from 'react';

function Columns(props) {
    return(
        <div className='columns is-centered main-column'>{props.children}</div>
    );
}

export default Columns;