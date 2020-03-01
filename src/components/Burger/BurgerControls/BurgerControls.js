import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import classes from './BurgerControls.module.css';
const controls = [
  {label:'Meat',type:'meat'},
  {label:'Salad',type:'salad'},
  {label:'Bacon',type:'bacon'},
  {label:'Cheese',type:'cheese'},
];
const BurgerControls = (props)=>{
  return (
    <div className={classes.BurgerControls}>
    <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map(control=>{
      return <BurgerControl key={control.label} label={control.label}  added={()=>props.addIngredients(control.type)} subtracted={()=>props.substractIngredients(control.type)} disabled={props.disabledInfo[control.type]} />;
    })}
    <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.showModal}>ORDER NOW</button>
    </div>
  );
}

export default BurgerControls;
