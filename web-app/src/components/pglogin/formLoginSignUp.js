import React, { Component } from 'react'
import { Button, FormGroup } from 'reactstrap';
import { Control, Form } from "react-redux-form";
import { connect } from "react-redux";
import { Auth } from "./../../services";
const { onGitHubLogin, onGoogleLogin, onEmailLogin } = Auth;

class FormLoginSignUp extends Component {

    constructor() {
        super();
        this.state = {
            page: "Login"
        };
    }

    toggleLoginSignUp = () => {
        const page = this.state.page === "Login" ? "SignUp" : "Login";
        this.setState({ page });
    }
    componentDidMount() {
    }

    render() {
        const { page } = this.state

        return (
            <div className=" mt-5 mx-auto" style={{ maxWidth: "350px" }}>
                <div className="border p-4 shadow-sm" style={{ background: "#fff" }}>
                    <div className="d-flex justify-content-between">
                        <p className="font-weight-bold">Member Login</p>
                        <div className="text-right">
                            <a onClick={this.toggleLoginSignUp}>
                                {this.state.page === "Login" ? "SignUp" : "Login"}
                            </a>
                        </div>
                    </div>

                    <div className="d-flex justify-content-around">
                        <Button onClick={onGoogleLogin} className="btn-block mr-2" color="light"><i className="fab fa-google"></i> Google</Button>
                        <Button onClick={onGitHubLogin} className="btn-block mt-0 mxl-2" color="light"><i className="fab fa-github"></i> Github</Button>
                    </div>

                    <hr />
                    <Form model={"user"} onSubmit={onEmailLogin(this.state.page)} className="mt-2">
                        <FormGroup>
                            <Control.text model={"user.email"} name="email" placeholder="Email" className="form-control" />
                        </FormGroup>
                        <FormGroup>
                            <Control.input type="password" model={"user.password"} name="password" placeholder="Password" className="form-control" />
                        </FormGroup>
                        <FormGroup>
                            {
                                page === "Login" ?
                                    <Button color="primary" className="btn btn-primary btn-block">Login</Button>
                                    :
                                    <Button color="success" className="btn btn-success btn-block">SignUp</Button>

                            }
                        </FormGroup>
                    </Form>

                </div>
            </div>
        )
    }
}

export default connect()(FormLoginSignUp)
