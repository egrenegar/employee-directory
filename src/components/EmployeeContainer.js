import React from 'react';
import Header from './Header';
import Table from '../components/Table';
import API from '../utils/API';

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

    render() {
        return(
            <>
            <Header/>
            <Table
                results={this.state.results}

            />
            </>
        )
    }
   
};

export default EmployeeContainer;