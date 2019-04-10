import firebase from "firebase";
import store from "./../redux/store";
import { success, error as ErrorNotify } from 'react-notification-system-redux';
import { push } from "connected-react-router";
const notificationOpts = {
    title: 'Authentication',
    position: 'tr',
    autoDismiss: 5,
};

export const onLogout = () => {
    firebase.auth().signOut().then(function () {
        store.dispatch(success({ ...notificationOpts, message: "You are Logout" }));
        store.dispatch(push("/"));
    }).catch(function (error) {
        store.dispatch(ErrorNotify({ ...notificationOpts, message: error.message }));
    });
}

export const setRedirectTrigger = () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            firebase.database()
                .ref("/profile/" + firebase.auth().currentUser.uid).once("value")
                .then((snapshoot) => {
                    if (!snapshoot.exists()) {
                        store.dispatch(push("/profilebasics"));
                    } else {
                        store.dispatch(push("/profile"));
                    }
                })
        }
    });
}

export const onEmailLogin = (page) => {
    return (data) => {
        if (page === "SignUp") {
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .catch(function (error) {
                    store.dispatch(ErrorNotify({ ...notificationOpts, message: error.message }));
                });
        } else {
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                .catch(function (error) {
                    store.dispatch(ErrorNotify({ ...notificationOpts, message: error.message }));
                });
        }
    }
}

export const onGoogleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).catch(function (error) {
        store.dispatch(ErrorNotify({ ...notificationOpts, message: error.message }));
    });
}

export const onGitHubLogin = () => {
    var provider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(provider).catch(function (error) {
        store.dispatch(ErrorNotify({ ...notificationOpts, message: error.message }));
    });
}