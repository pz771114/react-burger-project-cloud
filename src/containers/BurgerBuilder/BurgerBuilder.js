import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICE = {
  salad:0.5,
  cheese:0.4,
  meat:1.3,
  bacon:0.7
};
class BurgerBuilder extends Component {

  state = {
    ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },
    totalPrice:4, //base price,minimum charge
    purchasable:false
  };

  updatePurchaseState(ingredients)
  {
    const sum = Object.keys(ingredients)
    .map((igKey)=>{return ingredients[igKey]})
    .reduce((sum,el)=>{return sum+el;},0);

    this.setState({purchasable:sum>0});
  }
  addIngredientHandler = (type)=>{

    const oldIngredientCount = this.state.ingredients[type];
    const updatedIngredientCount = oldIngredientCount + 1;

    const updatedIngredients = {...this.state.ingredients};

    updatedIngredients[type] = updatedIngredientCount;

    const priceAddition = INGREDIENT_PRICE[type];

    const oldTotalPrice = this.state.totalPrice;

    const updatedTotalPrice = oldTotalPrice + priceAddition;

    this.setState({ingredients:updatedIngredients,totalPrice: updatedTotalPrice});
    this.updatePurchaseState(updatedIngredients);
  }
  subtractIngredientHandler = (type)=>{

    const oldIngredientCount = this.state.ingredients[type];
    if(oldIngredientCount<=0) return;
    const updatedIngredientCount = oldIngredientCount - 1;

    const updatedIngredients = {...this.state.ingredients};

    updatedIngredients[type] = updatedIngredientCount;

    const priceSubtraction = INGREDIENT_PRICE[type];

    const oldTotalPrice = this.state.totalPrice;

    const updatedTotalPrice = oldTotalPrice - priceSubtraction;

    this.setState({ingredients:updatedIngredients,totalPrice: updatedTotalPrice});
    this.updatePurchaseState(updatedIngredients);
  }

modalHandler = ()=>{
  console.log('show modal');
  }
  render() {
    const disabledInfo = {...this.state.ingredients};

    for(let key in disabledInfo)
    {
      disabledInfo[key] = disabledInfo[key]<=0;
    }
    return (
      <Aux>
      <Modal ingredients={this.state.ingredients}/>
        <Burger ingredients={this.state.ingredients}/>
        <BurgerControls showModal={this.modalHandler} price={this.state.totalPrice} addIngredients = {this.addIngredientHandler} substractIngredients = {this.subtractIngredientHandler} disabledInfo={disabledInfo} purchasable = {this.state.purchasable}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
