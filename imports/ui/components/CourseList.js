import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";

import Course from "../components/Course";

const SPACE_ID = Meteor.settings.public.contentful.client_id;
const ACCESS_TOKEN = Meteor.settings.public.contentful.client_secret;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export default class CourseList extends Component {
  state = {
    courses: [],
    searchString: "",
  };

  constructor() {
    super();
    this.getCourses();
  }

  getCourses = () => {
    client
      .getEntries({
        content_type: "course",
        query: this.state.searchString,
      })
      .then(response => {
        this.setState({ courses: response.items });
        console.log("retrieved courses:", this.state.courses);
      })
      .catch(error => {
        console.log("contentful retrieve error:", error);
      });
  };

  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getCourses();
  };

  render() {
    return (
      <div>
        {this.state.courses ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for Courses..."
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.courses.map(course => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Course course={course} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No Courses Found."
        )}
      </div>
    );
  }
}
