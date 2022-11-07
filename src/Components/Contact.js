import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Tshegofatso Nkutshweu</h2>
            <img style={{height: '250px'}} src="images/java.jpg" alt="avatar" />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
            I have had a deep enthusiasm for computers and programming since university. 
            I can work effectively under duress and meet deadlines that are very specific. 
            Working on many WeThinkCode_ projects helped me adapt to changes fast and developed me as a mature team player.
            </p>
          </Cell>
          <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">
                  
              <List>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-phone-square" aria-hidden='true'></i>+27 762516155/ +27 659194892</ListItemContent>
                  </ListItem>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-envelope" aria-hidden='true'></i>amandankutshweu@gmail.com</ListItemContent>
                  </ListItem>
              </List>
              </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
