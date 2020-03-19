import React, { Component } from 'react'
import { connect } from 'react-redux';
import {isEmpty} from 'lodash'

class EmployeeListPage extends Component {

    render() {
        console.log(this.props.tableData.userData)
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>gender</th>
                            <th>email</th>
                            <th>phone number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isEmpty(this.props.tableData.userData) && this.props.tableData.userData.user.map((value, index) => (
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.gender}</td>
                                <td>{value.email}</td>
                                <td>{value.phoneNo}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    tableData: state.login
})


export default connect(mapStateToProps, null)(EmployeeListPage)
