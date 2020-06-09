import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { Rowing, Lens } from "@material-ui/icons";

import otherActivities from "../dataSource/otherActivities";
import styles from "./styles";

const OtherActivities = ({ classes }) => {
  return (
    <div className={classes.workExperience}>
      <h4 className={classes.sectionTitle}>
        <Rowing className={classes.sectionTitleIcon} />
        OTHER ACTIVITIES
      </h4>
      {otherActivities.map(c => (
        <div className={classes.item}>
          <Lens className={classes.contentTextBullet} />
          <div className={classes.contentText}>{c.details}</div>
        </div>
      ))}
    </div>
  );
};

export default compose(
  withTheme(),
  withStyles(styles)
)(OtherActivities);
