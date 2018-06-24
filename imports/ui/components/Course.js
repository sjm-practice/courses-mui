import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Course = ({ course }) => {
  const { courseImage, title, description, url } = course.fields;
  return (
    <div>
      {course ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={courseImage.fields.file.url}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
            <Typography component="p">{description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={url} target="_blank">
              Go To course
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};

export default Course;
