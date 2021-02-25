import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';
import AddFood from './components/AddFood';
class App extends React.Component {
  state = {
    foods: foods,
  };
  addNewFood = (newFood) => {
    const updateFood = [...this.state.foods, newFood];
    this.setState({ foods: updateFood });
  };
  render() {
    return (
      <div className="App">
        <AddFood addFood={this.addNewFood} />
        <h2 style={{ fontSize: '40px', textAlign: 'center' }}>IRON NURITION</h2>
        {this.state.foods.map((food) => {
          return <Foodbox key={food.image} food={food} />;
        })}
      </div>
    );
  }
}
export default App;

