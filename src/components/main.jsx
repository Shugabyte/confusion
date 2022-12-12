import React, { Component } from 'react';
import Menu from './menu';
import Dishdetail from './dishDetail';
import { DISHES} from '../shared/dishes';
import Header from './header';
import Footer from './footer';

 class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
    
}

  render() { 
    return (
      <div>
        <Header />
        <Menu dishes = {this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        {this.state.selectedDish === null ? <div></div> : <Dishdetail 
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} 
        />}
        <Footer />
      </div>
    );
  }
 }
  
 export default Main;