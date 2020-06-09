import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";

import WorkHistory from "./workHistory";
import HonorsAndAwards from "./honorsAndAwards";
import OtherActivities from "../RightContent/otherActivities";
import styles from "./styles";

const LeftContent = ({ classes }) => {
  return (
    <div className={classes.leftRegion}>
      <WorkHistory />
      <hr />
      <HonorsAndAwards />
      <hr />
      <OtherActivities />
    </div>
  );
};

export default compose(
  withTheme(),
  withStyles(styles)
)(LeftContent);
