import React, { Component } from "react";
import { HomePage, LoginSignUp, ProfileBasics, Profile } from "./../../pages";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./../";
import { AuthProtection } from "./";
import { history } from "./../../redux/store";
import { ConnectedRouter } from "connected-react-router";
import TodoApp from "./../../todo";

class PageRouter extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/loginsignup" component={LoginSignUp} />
            <AuthProtection path="/profilebasics" component={ProfileBasics} />
            <Route path="/profile/:id" component={Profile} />
            <AuthProtection path="/profile" component={Profile} />
            <AuthProtection path="/todo" component={TodoApp} />
          </Switch>
        </Layout>
      </ConnectedRouter>
    );
  }
}

export default PageRouter;
