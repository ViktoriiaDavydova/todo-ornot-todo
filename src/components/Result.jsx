import React from "react";
import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function Result(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title={props.activity} />
        <CardContent>
          <CardMedia
            className={classes.media}
            image={props.img}
            title={props.activity}
            alt="Activity image"
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default Result;
