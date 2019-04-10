import firebase from "firebase";
import store from "./../redux/store";
import { success, error as ErrorNotify } from "react-notification-system-redux";
import { push } from "connected-react-router";
import { actions } from "react-redux-form";
import { actionCreator } from "./../redux/actions/formExtra.actions";
const notificationOpts = {
  title: "Profile",
  position: "tr",
  autoDismiss: 5
};

export const saveProfileData = (data, redirect = false) => {
  const avatar = store.getState().formExtra.avatar;
  data = { ...data, avatar };

  firebase
    .database()
    .ref("/profile/" + firebase.auth().currentUser.uid)
    .set(data, () => {
      if (redirect) {
        store.dispatch(push("/profile"));
      }
      store.dispatch(
        success({ ...notificationOpts, message: "Profile updated" })
      );
    });
};

export const loadProfileData = (location, id) => {
  if (!firebase.auth().currentUser || !id) {
    store.dispatch(push("/"));
    return Promise.reject("Error");
  }
  if (!id) {
    id = firebase.auth().currentUser.uid;
  }
  const profilePromise = firebase
    .database()
    .ref("/profile/" + id)
    .once("value");

  profilePromise.catch(() => {
    store.dispatch(
      ErrorNotify({ ...notificationOpts, message: "Profile update error" })
    );
  });

  profilePromise.then(snapshoot => {
    store.dispatch(actionCreator.setExtra(snapshoot.val()));
    return snapshoot;
  });

  if (location === "Form") {
    console.log("Hello");
    profilePromise.then(snapshoot => {
      if (snapshoot.exists()) {
        snapshoot.forEach(childSnapshoot => {
          store.dispatch(
            actions.change(
              "profileBasics." + childSnapshoot.key,
              childSnapshoot.val()
            )
          );
        });
      }
    });
  }

  return profilePromise;
};

export const loadProfileList = location => {
  const profilePromise = firebase
    .database()
    .ref("/profile")
    .once("value");

  profilePromise.catch(() => {
    store.dispatch(
      ErrorNotify({ ...notificationOpts, message: "Profile update error" })
    );
  });

  profilePromise.then(snapshoot => {
    console.log(snapshoot.val());
    return snapshoot;
  });

  if (location === "Form") {
    console.log("Hello");
    profilePromise.then(snapshoot => {
      if (snapshoot.exists()) {
        snapshoot.forEach(childSnapshoot => {
          store.dispatch(
            actions.change(
              "profileBasics." + childSnapshoot.key,
              childSnapshoot.val()
            )
          );
        });
      }
    });
  }

  return profilePromise;
};
