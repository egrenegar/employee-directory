import React from 'react';

function Table (props) {
    console.log(props);
    return(
        <div className="columns is-centered">
            <div className="column is-10">
                <table className="table is-fullwidth is-striped is-hoverable">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email Address</th>
                        </tr>
                    </thead>
                    <tbody>
                            {props.results.map(result => (
                                <tr>
                                    <td>
                                        <img
                                        alt={`${result.name.first} ${result.name.last}`}
                                        src={result.picture.thumbnail}
                                        />
                                    </td>
                                    <td>
                                        {result.name.first} {result.name.last}
                                    </td>
                                    <td>
                                        {result.email}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
 
    )
}

export default Table;