import { useState, useContext } from "react";
import {
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {  MenuItem, Select } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArithmeticContext from "../../../Context/arithmetic.context";

const useStyles = makeStyles((theme) => ({
  operatorContainer: {},
  textFieldEnterNumber: {
    border: "#8080804d 1px solid",
    borderRadius: "5px",
    minHeight: "55px",
    height: "100%",
    width: "100%",
  },
  selectOperator: {
    height: "100%",
    width: "100%",
  },
  displayingBoxContainer: {
    marginTop:'25%'
  },
  displayingBox: {
    height: "60px",
    width: "50px",
    
    textAlign: "center"
  },
  displayingBoxContent: {
    fontSize:"32px",
    verticalAlign: "middle",
    backgroundColor: "rgb(238,245,247)",
  },
  operatorDisplay: {
    height: "100%",
    width: "100%",
    textAlign: "center",
  },
  operatorDisplayContent: {
    fontSize: "64px",
    fontWeight: "lighter",
  },
  resultDisplay: {
    height: "100%",
    width: "100%",
    textAlign: "center",
    fontSize: "64px",
  },
  buttonCalculation: {
    height: "100%",
    width: "100%",
    textAlign: "center",
  },
  bottomButtonsGroup: {
    marginTop: "5%",
  },
}));

const ColorAddNumberButton = withStyles((theme) => ({
  root: {
    minHeight: "55px",
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
    minHeight: "55px",
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

const EvaluatorOperatorInput = ({ computeArithmeticHandler }) => {
  const { arithmetic } = useContext(ArithmeticContext);
  const classes = useStyles();
  const [inputOperator, setInputOperator] = useState(undefined);
  const [inputOperand, setInputOperand] = useState(undefined);
  const handleComputeArithmetic = () =>
    inputOperator && inputOperand
      ? computeArithmeticHandler([inputOperator, inputOperand])
      : void 0;

  const bindingResult = (arithmeticValues=[]) => new Function('return' + ' ' + arithmeticValues.join(''))

  return (
    <Box className={classes.operatorContainer}>
      <Grid container spacing={{ xs: 2, md: 3 }} className={classes.displayingBoxContainer} maxWidth="sm">
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid xs={4} sm={1} md={2} item className={classes.displayingBox}>
              <Box component="span" className={classes.displayingBoxContent}>
                {arithmetic[0]}
              </Box>
            </Grid>

            <Grid xs={4} sm={1} md={2} item className={classes.displayingBox}>
              <Box component="span" className={classes.displayingBoxContent}>
                {inputOperand || arithmetic[1]}
              </Box>
            </Grid>

            <Grid xs={4} sm={1} md={2} item className={classes.displayingBox}>
              <Box component="span" className={classes.displayingBoxContent}>
                {inputOperator || arithmetic[2]}
              </Box>
            </Grid>

            <Grid sm={12} item className={classes.operatorDisplay}>
              <Box component="span" className={classes.operatorDisplayContent}>
                &#x3d;
              </Box>
            </Grid>
            <Grid sm={12} item className={classes.resultDisplay}>
              <Box component="span">
                {(arithmetic && arithmetic.length == 3) && bindingResult(arithmetic)}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.bottomButtonsGroup}
          spacing={2}
        >
          <Grid item xs={6} sm={2} lg={2}>
            <Select
              className={classes.textFieldEnterNumber}
               labelId="demo-simple-select-label"
                label="Operator"
              value={inputOperator || arithmetic[1]}
              onChange={(event) =>
                !event.target.value
                  ? void 0
                  : setInputOperator(event.target.value)
              }
            >
              <MenuItem value={"/"}>&#x2215;</MenuItem>
              <MenuItem value={"*"}>&#xd7;</MenuItem>
              <MenuItem value={"+"}>&#x2b;</MenuItem>
              <MenuItem value={"-"}>&#8722;</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6} sm={2} lg={2}>
            <ColorTextField
              InputLabelProps={{ shrink: true }}
              type="number"
              className={classes.textFieldEnterNumber}
              id="outlined-basic"
              label="Operand"
              variant="outlined"
              onChange={(event) =>
                !event.target.value
                  ? void 0
                  : setInputOperand(event.target.value)
              }
              value={inputOperand || arithmetic[2]}
            />
          </Grid>
          <Grid item xs={12} sm={2} lg={2}>
            <ColorAddNumberButton
              className={classes.buttonCalculation}
              variant="contained"
              onClick={() => handleComputeArithmetic()}
            >
              Add Operation
            </ColorAddNumberButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EvaluatorOperatorInput;
