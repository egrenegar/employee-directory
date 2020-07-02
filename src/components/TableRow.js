import React from 'react';

function TableRow(props) {
    return (
        <tr>
            <td>
                <img
                    alt={`${props.firstName} ${props.lastName}`}
                    src={props.image}
                />
            </td>
            <td>
                {props.firstName} {props.lastName}
            </td>
            <td>
                {props.email}
            </td>
        </tr>
    )

}

export default TableRow;