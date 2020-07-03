import React from 'react';

const style = {
    name: {
        cursor: 'pointer'
    }
}

function Table (props) {
    return(
       
        <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>
                        <span className={'name'} onClick={props.sortByName} style={style.name}>Name</span>
                    </th>
                    <th>Email Address</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default Table;