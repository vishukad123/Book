import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
//import AddIcon from "@material-ui/icons/Add";
import NewItemForm from './NewItemForm';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


export default function Header() {
  const classes = useStyles();
// Header component 
  return (
    <Grid container spacing={12} className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid container>
            <Grid item xs>
              <Typography variant="h6" color="inherit">
                Technologies 
            </Typography>
            </Grid>
            <Grid item>
            {/* New Item Addition Form Component  */}
            <NewItemForm/>                 
            </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
    </Grid>
  );
}