import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectItem } from "../actions/selectedItemActions";
import { setitems } from "../actions/itemsActions";
import itemsData from "../items";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const ItemList = props => {
  // State for toggling item form
  const { items, selectItem, setitems } = props;
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      maxWidth: 400,
      backgroundColor: theme.palette.background.paper
    },
    button: {
      margin: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    }
  }));
  const classes = useStyles();
  // componentDidMount
  useEffect(() => {
    // Provided the default props from the items.js file
    setitems(itemsData);
  }, []);
  return (
    <>
      {items.map((item, i) => (
        <div
          onClick={() => selectItem(item)}
          key={i}
          item={item}
        >
        {/*  Rednder the Item List  */}
         <List className={classes.root}>
             <ListItem  button>
               <ListItemText primary={item.title}/>    
               <ListItemIcon>
                   <StarIcon />
                </ListItemIcon>
 
             </ListItem>
            <Divider variant="inset" component="li" />
         </List>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(
  mapStateToProps,
  { selectItem, setitems }
)(ItemList);
