import React, {Fragment} from 'react';
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
        employees: [],
        sorted: false
    }

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = query => {
        API.search(query)
            .then(res => this.setState({
                results: [...res.data.results],
                employees: [...res.data.results]
             }))
            .catch(err => console.log(err));
    }

    sortByName = event => {
        event.preventDefault()
        
        if (this.state.sorted === false) {
            const sortedByName = [...this.state.employees];
            sortedByName.sort(function(a, b) {
                var textA = a.name.first;
                var textB = b.name.first;
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })

            this.setState({
                employees: sortedByName,
                sorted: true
            })
        } else {
            this.setState({
                employees: [...this.state.results],
                sorted: false
            })
        };
    }

    handleSearch = event => {
        let value = event.target.value.toLowerCase();
        
        const filteredEmployees = this.state.results.filter(employee => {
            return employee.name.first.toLowerCase().includes(value) || employee.name.last.toLowerCase().includes(value)
        });

        this.setState({
            employees: filteredEmployees
        });
    }

    render() {
        // console.log(this.state)
        return (
            <Fragment>
                <Header />
                    <Columns>
                        <Column>
                        <SearchBar
                            onChange={this.handleSearch}
                        />
                            <Table
                                sortByName={this.sortByName}
                            >
                                {this.state.employees.map(employee => (
                                    <TableRow
                                        key={employee.id.value}
                                        firstName={employee.name.first}
                                        lastName={employee.name.last}
                                        image={employee.picture.thumbnail}
                                        email={employee.email}
                                    />
                                ))}
                            </Table>
                        </Column>
                    </Columns>
            </Fragment>
        )
    }

};

export default EmployeeContainer;