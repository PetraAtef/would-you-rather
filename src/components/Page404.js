import { Component } from "react";
import React from 'react'

class Page404 extends Component{
  render(){
    const allStyles = {
        height: '100vh',
        width: '100vw',
        backgroundColor: "#121212",
        display: 'flex'
      }
    
      const labelStyles = {
        color: 'white',
        fontSize: '100px',
        fontWeight: 'bold',
        margin: 'auto'
      }

      return (
        <div style={allStyles}>
            <span style={labelStyles}>404 NOT FOUND</span>
        </div>
      );
    };
  }
    

export default Page404;