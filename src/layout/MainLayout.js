import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import SubjectIcon from "@material-ui/icons/Subject";
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  fab: {
    position: "absolute",
    right: 35,
    bottom: 30
  }
}));

const MainLayout = (props) => {
  const classes = useStyles();
  return (
    <div>
      <TopBar />
      <Fab color="secondary" className={classes.fab} aria-label="edit">
        <SubjectIcon />
      </Fab>
    </div>
  );
};

export default MainLayout;
