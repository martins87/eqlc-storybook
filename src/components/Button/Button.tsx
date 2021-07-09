import React from 'react';
import {
  Box,
  Button as _Button,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#252525',
    borderRadius: '10px',
    padding: '18px 93px 16px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    border: '2px solid #000000'
  },
  text: {
    fontFamily: 'Crimson Text',
    fontSixe: '20px !important',
    fontWeight: 600,
    fontStyle: 'normal',
  }
}));

interface ButtonProps {
    transparent: boolean,
    width: string,
    height: string,
    children: any
}

const Button = (props: ButtonProps) => {
  const classes = useStyles();

  return (
    <_Button
      className={classes.root}
      variant='contained'
      style={{
        background: props.transparent ? '#fff5de' : '#252525',
        color: props.transparent ? '#000000' : '#FFFFFF',
        width: props.width,
        height: props.height
      }}>
      <Box className={classes.text}>
        {props.children}
      </Box>
    </_Button>
  )
}

export default Button;