import React, { useState } from "react";
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
  const [res, setRes] = useState(null);

  const classes = useStyles();

  function handleRes(newValue) {
    setRes(newValue);
    props.handleSubmit(newValue);
  }
  return (
    <div >
      <Card className={classes.root}>
        <CardHeader title={props.title} />
        <CardContent>
          <CardMedia
            className={classes.media}
            id={props.id}
            image={props.img}
            alt="Activity image"
            onSubmit={handleRes}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default Result;
