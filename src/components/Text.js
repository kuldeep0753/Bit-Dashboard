import Typography from '@material-ui/core/Typography';
import React from 'react';

function TextComponent() {
    const styles = {
        color: '#676879',
        paddingTop:'10px'
      };
  return (
    <Typography variant="p" color="primary" align="center" style={styles}>
      No credit card needed   ✦   Unlimited time on Free plan
    </Typography>
  );
}

export default TextComponent;
