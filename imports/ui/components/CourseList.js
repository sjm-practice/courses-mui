import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";

// import Course from "../components/Course";

const SPACE_ID = Meteor.settings.public.contentful.client_id;
const ACCESS_TOKEN = Meteor.settings.public.contentful.client_secret;

export default class CourseList extends Component {
  state = {
    courses: [],
    searchString: "",
  };

  render() {
    return (
      <div>
        <div>ID: {SPACE_ID}</div>
        <div>TOKEN: {ACCESS_TOKEN}</div>
      </div>
    );
  }
}
