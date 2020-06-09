import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { ThumbUp, Lens } from "@material-ui/icons";

import honorsAndAwards from "../dataSource/honorsAndAwards";
import styles from "./styles";

const HonorsAndAwards = ({ classes }) => {
  return (
    <div className={classes.workExperience}>
      <h4 className={classes.sectionTitle}>
        <ThumbUp className={classes.sectionTitleIcon} />
        ACHIEVEMENTS
      </h4>
      {honorsAndAwards.map(a => (
        <div className={classes.item}>
          <div key={a.details} className={classes.content}>
            <Lens className={classes.contentTextBullet} />
            <div className={classes.contentText}>
              {a.details} ({a.year})
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default compose(
  withTheme(),
  withStyles(styles)
)(HonorsAndAwards);
