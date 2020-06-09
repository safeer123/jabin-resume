import React from "react";
import { compose } from "recompose";
import { Phone, Email, Link, LocationOn } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { withStyles, withTheme } from "@material-ui/core/styles";

import contactInfo from "../dataSource/contact";
import resumeHeader from "../dataSource/resumeHeader";
import styles from "./styles";

const Header = ({ classes }) => (
  <div className={classes.headerRoot}>
    <img
      src={contactInfo.profilePhoto}
      alt="Profile"
      className={classes.profilePhoto}
    />
    <div className={classes.profileDetails}>
      <Typography
        component="h2"
        variant="display1"
        gutterBottom
        classes={{
          display1: `${classes.headerFontStyle} ${classes.nametitle}`
        }}
      >
        {contactInfo.name}
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        classes={{
          h6: `${classes.headerFontStyle} ${classes.jobtitle}`
        }}
      >
        {resumeHeader.title}
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        classes={{
          body1: `${classes.headerAboutMe}`
        }}
      >
        {resumeHeader.aboutMe}
      </Typography>

      <div>
        {resumeHeader.promotedSkills.map(s => (
          <div key={s} className={classes.skillBadge}>
            {s}
          </div>
        ))}
      </div>
    </div>

    <div className={classes.contactDetails}>
      <Typography
        variant="h6"
        gutterBottom
        classes={{
          h6: `${classes.headerFontStyle} ${classes.contactItem}`
        }}
      >
        {contactInfo.phone}
        <Phone className={classes.contactInfoIcon} />
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        classes={{
          h6: `${classes.headerFontStyle} ${classes.contactItem}`
        }}
      >
        {contactInfo.email}
        <Email className={classes.contactInfoIcon} />
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        classes={{
          h6: `${classes.headerFontStyle} ${classes.contactItem}`
        }}
      >
        <a
          className={classes.contactInfoLink}
          href={contactInfo.linkedin}
          target="_blank"
        >
          LinkedIn
        </a>
        <Link className={classes.contactInfoIcon} />
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        classes={{
          body1: `${classes.headerFontStyle} ${classes.contactItem}`
        }}
      >
        <div className={classes.contactInfoAddress}>{contactInfo.address}</div>
        <LocationOn className={classes.contactInfoIcon} />
      </Typography>
    </div>
  </div>
);

export default compose(
  withTheme(),
  withStyles(styles)
)(Header);
