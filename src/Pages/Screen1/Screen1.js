import {  useContext } from "react";
import {
  makeStyles,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import EvaluatorNumberInput from "../../Components/ExpressionEvaluator/components/evaluatorNumberInput";

import ArithmeticContext from "../../Context/arithmetic.context";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "rgb(142, 226, 194)",
    fontWeight: theme.typography.fontWeightLight,
    textAlign: "center",
  },
}));

const Screen1 = () => {
  const { arithmetic, onArithmeticChange } = useContext(ArithmeticContext);
  const navigate = useNavigate();
  const classes = useStyles();

  let weakCache;
  const handleInputNumber = (value) => {
    weakCache = Array.from(arithmetic);
    weakCache.shift();
    weakCache.unshift(value);
    onArithmeticChange(weakCache);
    navigate("/Screen2");
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {
        <Grid container justifyContent="center">
          <Grid item sm={6}>
            <Typography
              className={classes.title}
              variant="h1"
              component="h2"
              gutterBottom
            >
              Expression
              <br />
            </Typography>
          </Grid>
          <Grid item sm={12}></Grid>
          <Grid item sm={5}>
            <Typography
              className={classes.title}
              variant="h1"
              component="h2"
              gutterBottom
            >
              Evaluator
            </Typography>
          </Grid>
        </Grid>
      }
      <EvaluatorNumberInput
        choseNumberHandler={(value) => handleInputNumber(value)}
      />
    </Grid>
  );
};

export default Screen1;
