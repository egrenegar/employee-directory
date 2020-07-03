import React, { Fragment } from 'react';

function Table (props) {
    console.log(props);
    return(
        <Fragment>
        <input class="input" type="text" placeholder="Search"/>
        <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
        </span>
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
        </Fragment>

    )
}

export default Table;