import { makeStyles, Box, Typography } from "@material-ui/core";
import Image from "../images/warm-bg.jpg";
import Form from "./Form";

const useStyles = makeStyles({
  component: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    width: "65%",
    margin: "0 auto",
  },
   components: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
    backgroundColor: "#ffc0cb",
  },
  leftContainer: {
    width: "50%",
    height: "100%",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    borderRadius: "20px 0 0 20px",
  },
  rightContainer: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(to right, #e74c3c, #e67e22)",
  },
});

const Weather = () => {
  const classes = useStyles();
  return (
    <Box className={classes.components}>
    <Box className={classes.component}>
      <Box className={classes.leftContainer}></Box>
      <Box className={classes.rightContainer}>
        <Form />
      </Box>
      </Box>
    </Box>
  );
};

export default Weather;
