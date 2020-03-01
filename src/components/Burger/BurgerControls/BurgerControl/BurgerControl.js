import React from 'react';
import classes from './BurgerControl.module.css';

const BurgerControl =(props)=>{
  return(
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.subtracted} disabled = {props.disabled}>Less</button>
      <button className={classes.More} onClick={props.added}>More</button>
    </div>
    );
}

export default BurgerControl;
