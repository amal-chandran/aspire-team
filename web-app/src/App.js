import React, { Component } from 'react';
import { PageRouter, Notifications } from './components/main';
import { Provider } from "react-redux";
import store from "./redux/store";
import { Auth } from "./services";

class App extends Component {
  componentDidMount() {
    Auth.setRedirectTrigger();
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <Notifications />
          <PageRouter />
        </div>
      </Provider>
    );
  }
}

export default App;
