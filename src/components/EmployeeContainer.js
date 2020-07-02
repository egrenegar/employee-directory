import React from 'react';
import API from '../utils/API';
import Header from './Header';
import Columns from './Columns';
import Column from './Column';
import Table from '../components/Table';
import TableRow from './TableRow';

class EmployeeContainer extends React.Component {

    state = {
        results: []
    }

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    }

    sortByName = () => {

    }

    render() {
        return (
            <>
                <Header />
                <Columns>
                    <Column>
                        <Table>
                            {this.state.results.map(employee => (
                                <TableRow
                                    key={employee.id.value}
                                    firstName={employee.name.first}
                                    lastName={employee.name.last}
                                    image={employee.picture.thumbnail}
                                    email={employee.email}
                                    sortByName={this.sortByName}
                                />
                            ))}
                        </Table>
                    </Column>
                </Columns>
            </>
        )
    }

};

export default EmployeeContainer;