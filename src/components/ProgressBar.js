import React  from 'react'

const ProgressBar = (props) => {
    const { color, percentage } = props;

    const allStyles = {
        height: 20,
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: 10,
        margin: 'auto 0'
      }
    
      const partStyles = {
        height: '100%',
        width: `${percentage}%`,
        backgroundColor: color,
        borderRadius: 10,
        textAlign: 'right'
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }

      return (
        <div style={allStyles}>
          <div style={partStyles}>
            <span style={labelStyles}>{`${percentage}%`}</span>
          </div>
        </div>
      );
    };

export default ProgressBar;