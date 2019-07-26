import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 655
  },
}));
const TechInfo = ({ selectedItem }) => {
  const classes = useStyles();
  return (
    <div>
      {selectedItem ? (
        <>
         {/* Displays the Technolgy Name and Link  */}
         <Card className={classes.card}>
          <CardHeader
              title={selectedItem.title}
              subheader={selectedItem.author}
         />
         
            <div>
               <a href={selectedItem.author} target="_blank">{selectedItem.author}</a>
              <hr />
              <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                 {selectedItem.description}
                 </Typography> 
              </CardContent>
              <IconButton aria-label="add to favorites">
                 <FavoriteIcon />
               </IconButton>
            </div>
         
          </Card> 
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedItem: state.selectedItem
  };
};

export default connect(mapStateToProps)(TechInfo);
