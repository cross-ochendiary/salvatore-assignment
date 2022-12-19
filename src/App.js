import React, {useState} from 'react';

import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createBrowserRouter, RouterProvider } from "react-router-dom";

import Screen1 from "./Pages/Screen1/Screen1"
import Screen2 from "./Pages/Screen2/Screen2"
import Screen3 from "./Pages/Screen3/Screen3"

import ArithmeticContext from './Context/arithmetic.context'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justtifiContent: "center",
  },
}));

function App() {

const router = createBrowserRouter([
  {
    path: "*",
    element: <Screen1 />,
  },
  {
    path: "/Screen2",
    element: <Screen2 />,
  },
  {
    path: "/Screen3",
    element: <Screen3 />,
  },
]);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");
  
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const classes = useStyles();

  const [arithmetic, setArithmetic] = useState([]);

  const onArithmeticChange = (arithmetic) => {
    setArithmetic(arithmetic);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <ArithmeticContext.Provider value={{ arithmetic, onArithmeticChange }}>
          <RouterProvider router={router} />
        </ArithmeticContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
