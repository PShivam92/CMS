import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class Header extends Component {
  render() {
    return (
      
    <div className="Logo">
        <Typography color="textSecondary">
            Welcome to CMS
          </Typography>
        <Typography color="primary" variant="display3">
            Employee record
          </Typography>
        <br />
        <br />
          <Typography color="textSecondary">
            Built on
          </Typography>
        Hyperledger Fabric
        <br />
        <br />
        <br />
        <Typography color="textSecondary">
         
          </Typography>
    </div>

    );
  }
} 