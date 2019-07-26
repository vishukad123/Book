import React, { Component } from "react";
import ItemList from "./ItemList";
import TechInfo from "./TechInfo";
import Header from './Header'
import { Grid } from "@material-ui/core";
class App extends Component {
  render() {
    return (
      <main className="book-container">


        {/* Header component */}
        <Header/>
        <Grid container spacing={12} className='book-container_wrapper'>


        {/* For Technology list */}
        <Grid item xs={5}>
          <ItemList />
          </Grid>

          
        {/* Render the component of information */}
          <Grid item xs={7}>
          <TechInfo />
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default App;
