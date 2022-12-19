import { useState, useContext } from "react";
import {
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArithmeticContext from "../../../Context/arithmetic.context";

const useStyles = makeStyles((theme) => ({
  buttonAddNumber: {
    width: "100%",
    height: "100%",
  },
  textFieldEnterNumber: {
    width: "100%",
    height: "100%",
  },
}));

const ColorAddNumberButton = withStyles((theme) => ({
  root: {
    color: "#ffff",
    fontWeight: "bold",
    backgroundColor: theme.palette.success.light,
    "&:hover": {
      backgroundColor: theme.palette.success.light,
    },
    textTransform: "capitalize",
  },
}))(Button);

const ColorTextField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.grey["600"],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.grey["600"],
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.grey["600"],
      },
      "&:hover fieldset": {
        borderColor: theme.palette.grey["600"],
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.grey["600"],
      },
    },
  },
}))(TextField);

const EvaluatorNumberInput = ({ choseNumberHandler }) => {
  const { arithmetic } = useContext(ArithmeticContext);
  const classes = useStyles();
  const [inputNumber, setInputNumber] = useState(null);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={3} lg={3}>
        <ColorTextField
          InputLabelProps={{ shrink: true }}
          type="number"
          className={classes.textFieldEnterNumber}
          id="outlined-basic"
          label="Please enter a number"
          placeholder="Please enter a number"
          variant="outlined"
          onChange={(event) => {
            setInputNumber(event.target.value || null);
          }}
          value={inputNumber || arithmetic[0]}
        />
      </Grid>
      <Grid item xs={12} sm={3} lg={3}>
        <ColorAddNumberButton
          className={classes.buttonAddNumber}
          variant="contained"
          disabled={!inputNumber}
          onClick={() => {
            choseNumberHandler(inputNumber);
          }}
        >
          Add number
        </ColorAddNumberButton>
      </Grid>
    </Grid>
  );
};

export default EvaluatorNumberInput;
