import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { School } from "@material-ui/icons";

import education from "../dataSource/education";
import styles from "./styles";

const Education = ({ classes }) => {
  return (
    <div className={classes.centerAligned}>
      <h4 className={classes.sectionTitle}>
        <School className={classes.sectionTitleIcon} />
        EDUCATION
      </h4>
      {education.map(e => (
        <div className={classes.item}>
          <div className={classes.contentText}>{e.degree}</div>
          <div className={classes.contentText}>
            {e.cource} - ({e.year})
          </div>
          <div className={`${classes.contentText} ${classes.highlighted}`}>
            {e.university}
          </div>
          <div className={classes.contentText}>{e.results}</div>
        </div>
      ))}
    </div>
  );
};

export default compose(
  withTheme(),
  withStyles(styles)
)(Education);
