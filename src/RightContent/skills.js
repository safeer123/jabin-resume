import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { Star } from "@material-ui/icons";

import workExperience from "../dataSource/workExperience";
import skills from "../dataSource/skills";
import styles from "./styles";

const Skills = ({ classes }) => {
  return (
    <div className={classes.workExperience}>
      <h4 className={`${classes.sectionTitle} ${classes.centerAligned}`}>
        <Star className={classes.sectionTitleIcon} />
        SKILLS
      </h4>
      {skills.map(s => (
        <div className={classes.item}>
          <div className={classes.skillItem}>{s.title}</div>
          <div className={classes.skillRating}>
            <div
              className={classes.skillRatingStroke}
              style={{
                width: `${(s.rating / 5) * 100}%`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default compose(
  withTheme(),
  withStyles(styles)
)(Skills);
