import React from 'react';

function Table () {
    return(
        <div className="columns is-centered">
            <div className="column is-half">
                <table className="table is-fullwidth is-striped is-hoverable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            Emily Renegar
                            </td>
                            <td>
                            Front-End Dev
                            </td>
                            <td>
                            e@email.com
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
 
    )
}

export default Table;