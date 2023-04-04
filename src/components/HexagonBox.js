import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { React, useEffect, useRef } from "react";
import ArrowButton from "./Button";
import TextComponent from "./Text";
import Heading from "./Heading";

const useStyles = makeStyles((theme) => ({
  hexagonBox: {
    width: "107px",
    height: "120px",
    backgroundColor: "#f0f0f0",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    // position: 'absolute',
    top: 0,
    left: 0,
    transition: "transform 1s linear",
    backgroundImage: `url('https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/segment-layout-default-images/floating-integrations/gitlab.png')`,
    backgroundSize: "100% 100%",
  },
  hexagonWrapper: {
    display: "flex",
    // justifyContent: "center",
  },
  hexagonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    gap: "20px",
  },
  arrowButton:{
    display: 'flex',
    flexDirection:'column',
    justifContent: 'center',
    alignItems: 'center',
  },
  heading:{
    margin: '0 89px 0 89px'
  }
}));

function HexagonBox() {
  const classes = useStyles();
  const hexagonRefs = useRef([]);

  useEffect(() => {
    function moveHexagons() {
      const hexagonWidth = hexagonRefs.current[0].offsetWidth;
      const gridWidth = hexagonWidth * 6 + 20 * 5;
      let x = 0;
      let y = 0;
      let direction = "right";
      setInterval(() => {
        if (direction === "right") {
          x += hexagonWidth + 20;
          if (x > gridWidth - hexagonWidth) {
            direction = "down";
            x = gridWidth - hexagonWidth;
          }
        } else if (direction === "left") {
          x -= hexagonWidth + 20;
          if (x < 0) {
            direction = "up";
            x = 0;
          }
        }
        hexagonRefs.current.forEach((hexagon) => {
          hexagon.style.transform = `translate(${x}px`;
        });
      }, 1000);
    }
    moveHexagons();
  }, []);

  return (
    <>
    <div className={classes.arrowButton} >
    <Heading />
    </div>
   
      <Box className={classes.hexagonWrapper}>
        <Box className={classes.hexagonGrid}>
          {[...Array(20)].map((_, i) => (
            <Box
              key={i}
              className={classes.hexagonBox}
              ref={(el) => (hexagonRefs.current[i] = el)}
            />
          ))}
        </Box>
      </Box>
      {/* <Button variant="contained" >
        Send
      </Button> */}
      <div className={classes.arrowButton}>
      <ArrowButton />
      <TextComponent/>
      </div>
      
    </>
  );
}

export default HexagonBox;

{
  /* <div class="jsx-4243763956 integration-badge-wrapper" style="transform: translate(482.5px, 0px);"><div class="jsx-2223939884 integration-badge-component" style="transform: translateY(-4.96471px);"><picture class="jsx-4212101279 picture-component"><img alt="github" class="jsx-4212101279 integration-badge-image" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/segment-layout-default-images/floating-integrations/github.png"></picture></div></div> */
}
