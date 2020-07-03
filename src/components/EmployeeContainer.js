import React from 'react';
import API from '../utils/API';
import Header from './Header';
import Columns from './Columns';
import Column from './Column';
import SearchBar from './SearchBar';
import Table from './Table';
import TableRow from './TableRow';

class EmployeeContainer extends React.Component {

    state = {
        results: [],
        searched: [],
        name: ''
    }

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = query => {
        API.search(query)
            .then(res => this.setState({
                results: res.data.results,
                searched: res.data.results
             }))
            .catch(err => console.log(err));
    }

    sortByName = (e) => {
        e.preventDefault()
    }

    handleSearch = event => {
        let value = event.target.value;
        console.log(value);
        
        const filteredEmployees = this.state.results.filter(employee => {
            return employee.name.first.includes(value)
        });

        this.setState({
            searched: filteredEmployees
        });
    }

    render() {
        return (
            <>
                <Header />
                <Columns>
                    <Column>
                    <SearchBar
                        onChange={this.handleSearch}
                    />
                        <Table>
                            {this.state.searched.map(employee => (
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