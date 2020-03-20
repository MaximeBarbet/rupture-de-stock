import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/icons/Menu";
import Logo from '../img/rupture-de-stock-logo.png'

const headerStyle = {
  appBar: {
    display: "flex",
    border: "0",
    paddingRight: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset"
  },
  fixed: {
    position: "fixed",
    zIndex: "1100"
  },
  container: {
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  },
  flex: {
    flex: 1
  },
  title: {
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 60px 8px 30px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    }
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    backgroundColor: "#fff !important",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: 260,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
  },
  link: {
    cursor: "pointer",
    color: "#4a4a4a",
    lineHeight: 1.5,
    paddingRight: "60px",
    textDecoration: "none",
    "&:hover": {
      color: "#e74c3c",
    },
    "&:last-child": {
      paddingRight: "0",
    }
  },
  active: {
    color: "#e74c3c"
  },
};

const useStyles = makeStyles(headerStyle);

export default function Navbar() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes['white']]: 'white',
    [classes.fixed]: true
  });
  const brandComponent = (
    <Button className={classes.title}>
      <Link to="/">
        <img src={Logo} alt="Rupture-de-Stock" width="149" height="70" style={{ verticalAlign: 'middle' }} />
      </Link>
    </Button>
  );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {brandComponent}
        <div className={classes.flex}>
          <Hidden mdDown implementation="css">
            <Link className={classes.link} activeClassName={classes.active} to="/">
              ACCUEIL
            </Link>
            <Link className={classes.link} activeClassName={classes.active} to="/interventions">
              INTERVENTIONS
            </Link>
            <Link className={classes.link} activeClassName={classes.active} to="/actions">
              ACTIONS
            </Link>
            <Link className={classes.link} activeClassName={classes.active} to="/spectacles">
              SPECTACLES
            </Link>
            <Link className={classes.link} activeClassName={classes.active} to="/formations">
              FORMATIONS
            </Link>
            <Link className={classes.link} activeClassName={classes.active} to="/equipe-artistique">
              ÉQUIPE
            </Link>
            <Link className={classes.link} activeClassName={classes.active} to="/actualites">
              ACTUALITÉS
            </Link>
          </Hidden>
        </div>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden lgUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <List>
            <ListItem>
              <Link  className={classes.link} activeClassName={classes.active} to="/">
                ACCUEIL
              </Link>
            </ListItem>
            <ListItem>
              <Link  className={classes.link} activeClassName={classes.active} to="/interventions">
                INTERVENTIONS
              </Link>
            </ListItem>
            <ListItem>
              <Link  className={classes.link} activeClassName={classes.active} to="/spectacles">
                SPECTACLES
              </Link>
            </ListItem>
            <ListItem>
              <Link  className={classes.link} activeClassName={classes.active} to="/formations">
                FORMATIONS
              </Link>
            </ListItem>
            <ListItem>
              <Link  className={classes.link} activeClassName={classes.active} to="/equipe-artistique">
                ÉQUIPE
              </Link>
            </ListItem>
            <ListItem>
              <Link  className={classes.link} activeClassName={classes.active} to="/actualites">
                ACTUALITÉS
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}
