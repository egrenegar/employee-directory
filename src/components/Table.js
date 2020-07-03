import React from 'react';

function Table (props) {
    console.log(props);
    return(
       
        <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>
                        <span onClick={() => props.sortByName}>Name</span>
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