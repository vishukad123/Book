import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

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
             
         />
         
            <div>
               <a href={selectedItem.link} target="_blank">{selectedItem.link}</a>
              <hr />
              <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                 {selectedItem.description}
                 </Typography> 
              </CardContent>
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
