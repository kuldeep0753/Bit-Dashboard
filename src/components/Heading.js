import React from 'react';
import { Typography } from '@material-ui/core';

function Heading() {
    const styles = {
        fontSize: '2.75rem',
    lineHeight: '60px',
    fontWeight: '700',
    margin: '0 89px',
      };
    
  return (
    <Typography variant="h2" component="h2" className="monday-markup-language-component core-title lg">
      Easily connect all your favorite tools with monday.com
    </Typography>
  );
}

export default Heading;