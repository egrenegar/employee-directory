import React from 'react';

function Column(props) {
    return(
        <div className="column is-8">{props.children}</div>
    );
}

export default Column;