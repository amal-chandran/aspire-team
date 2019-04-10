import React from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "firebase";
import {  error as ErrorNotify } from 'react-notification-system-redux';
import { connect } from "react-redux";

const notificationOpts = {
    title: 'Authentication',
    position: 'tr',
    autoDismiss: 5,
};


const AuthProtection = ({ component: Component, showNotify, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!firebase.auth().currentUser) showNotify({ message: "Not authicated user" });

            return firebase.auth().currentUser ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/loginsignup",
                            state: { from: props.location }
                        }}
                    />
                )
        }
        }
    />
);
const mapDispatchToProps = (dispatch) => ({
    showNotify: (Opts) => dispatch(ErrorNotify({ ...notificationOpts, ...Opts }))
});

export default connect(null, mapDispatchToProps)(AuthProtection);