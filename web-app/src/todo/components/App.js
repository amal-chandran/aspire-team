import React, { Component } from "react";
import Header from "../containers/Header";
import MainSection from "../containers/MainSection";
import { loadTodo } from "./../../services/todo";

export default class App extends Component {
  render() {
    return (
      <div className="todoapp">
        <Header />
        <MainSection />
      </div>
    );
  }
}
