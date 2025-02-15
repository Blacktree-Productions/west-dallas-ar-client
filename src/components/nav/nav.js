import React from "react";
// import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";

const useStyles = makeStyles ({
  root: {
    width: 500, 
  },
});

const  Nav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/guide" label="Guide" value="guide" icon={<RestoreIcon />}/>
    <BottomNavigationAction component={Link} to="/explore" label="Explore" value="explore" icon={<FavoriteIcon />}/>
    <BottomNavigationAction component={Link} to="/about" label="About" value="about" icon={<LocationOnIcon />}/>
    </BottomNavigation>
  );
}

export default Nav;