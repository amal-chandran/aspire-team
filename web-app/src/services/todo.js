import firebase from "firebase";
import store from "./../redux/store";
import { success, error as ErrorNotify } from "react-notification-system-redux";
import { push } from "connected-react-router";
import { setTodoList } from "./../todo/actions";
const notificationOpts = {
  title: "Todo",
  position: "tr",
  autoDismiss: 5
};

export const saveTodo = () => {
  const todos = store.getState().todos;

  firebase
    .database()
    .ref("/todos")
    .set(todos, () => {
      store.dispatch(
        success({ ...notificationOpts, message: "Todos updated" })
      );
    });
};

export const loadTodo = () => {
  const profilePromise = firebase
    .database()
    .ref("/todos")
    .on("value", snapshot => {
      store.dispatch(setTodoList(snapshot.val() || []));
      store.dispatch(success({ ...notificationOpts, message: "Todos synced" }));
    });
};
