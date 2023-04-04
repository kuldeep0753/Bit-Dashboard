// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import React from 'react';

// const useStyles = makeStyles((theme) => ({
//   roundButton: {
//     padding: '16px 32px 16px 31px',
//     backgroundColor:'#6161FF',
//     fontSize: '1rem',
//     borderRadius: '40px',
//     fontWeight:' 400',
//     lineHeight: '17px',
//   },
// }));

// function RoundButton() {
//   const classes = useStyles();

//   return (
//     <Button variant="contained" color="primary" className={classes.roundButton}>
//       Get Started
//     </Button>
//   );
// }

// export default  RoundButton;
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  arrowButton: {
    padding: '16px 32px 16px 31px',
    backgroundColor:'#6161FF',
    fontSize: '1rem',
    borderRadius: '40px',
    fontWeight:' 400',
    lineHeight: '17px',
    fontFamily: 'Poppins,Roboto,Helvetica,Arial,sans-serif',
    boxSizing: 'border-box',
    fontWeight: '300',
    marginTop:'62px',
  },
  arrowIcon: {
    marginLeft: theme.spacing(1),
  },
}));

function ArrowButton() {
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary" className={classes.arrowButton}>
      Click me
      <ArrowForwardIcon className={classes.arrowForwardIcon} />
    </Button>
  );
}
export default  ArrowButton;
