import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";

import Skills from "./skills";
import Education from "./education";
import styles from "./styles";

const RightContent = ({ classes }) => {
  return (
    <div className={classes.rightRegion}>
      <Skills />
      <hr />
      <Education />
    </div>
  );
};

export default compose(
  withTheme(),
  withStyles(styles)
)(RightContent);
