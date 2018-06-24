import React, { Component } from "react";
import NavBar from "./components/NavBar";
import CourseList from "./components/CourseList";

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CourseList />
      </div>
    );
  }
}
