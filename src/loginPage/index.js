import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleChange, handleChangePassword, errorMessage,userData } from '../actions'


class Loginpage extends Component {
    handleChange = (event) => {
        this.props.handleChange({ "email": event.target.value })
    }
    handleChangePassword = (event) => {
        this.props.handleChangePassword({ "password": event.target.value })
    }

    handleSubmit = (event) => {
        let users = {
            user: [{
                "id": 1,
                "name": "test1",
                "age": "11",
                "gender": "male",
                "email": "test1@gmail.com",
                "phoneNo": "9415346313"
            },
            {
                "id": 2,
                "name": "test2",
                "age": "12",
                "gender": "male",
                "email": "test2@gmail.com",
                "phoneNo": "9415346314"
            },
            {
                "id": 3,
                "name": "test3",

                "age": "13",
                "gender": "male",
                "email": "test3@gmail.com",
                "phoneNo": "9415346315"
            },
            {
                "id": 4,
                "name": "test4",
                "age": "14",
                "gender": "male",
                "email": "test4@gmail.com",
                "phoneNo": "9415346316"
            },
            {
                "id": 5,
                "name": "test5",
                "age": "15",
                "gender": "male",
                "email": "test5@gmail.com",
                "phoneNo": "9415346317"
            },
            {
                "id": 6,
                "name": "test6",
                "age": "16",
                "gender": "male",
                "email": "test6@gmail.com",
                "phoneNo": "9415346318"
            }
            ]
        }
        event.preventDefault()
        if (this.props.loginData.email.email === "hruday@gmail.com" && this.props.loginData.password.password === "hruday123") {
            this.props.userData(users)
            this.props.history.push('/employeeListPage')
        }
        if (this.props.loginData.password.password !== "hruday123") {
            this.props.errorMessage({ "error": "emailPassword" })
        }
        if (this.props.loginData.email.email !== "hruday@gmail.com") {
            this.props.errorMessage({ "error": "emailError" })
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sign In</h5>
                                    <form className="form-signin">
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus onChange={this.handleChange} />
                                            <label htmlFor="inputEmail">Email address</label>
                                            {this.props.loginData.error.error === "emailError" ? <p className="text-danger">please enter valid email</p> : ''}
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.handleChangePassword} />
                                            <label htmlFor="inputPassword">Password</label>
                                            {this.props.loginData.error.error === "emailPassword" ? <p className="text-danger">please enter valid password</p> : ''}
                                        </div>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={(event) => this.handleSubmit(event)}>Sign in</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loginData: state.login
})

const mapDispatchToProps = dispatch => ({
    handleChange: (event) => dispatch(handleChange(event)),
    handleChangePassword: (event) => dispatch(handleChangePassword(event)),
    errorMessage: (errorMessages) => dispatch(errorMessage(errorMessages)),
    userData :(usersData) => dispatch(userData(usersData))
})
export default connect(mapStateToProps, mapDispatchToProps)(Loginpage)
