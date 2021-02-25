import React from 'react';
import 'bulma/css/bulma.css';

class Addfood extends React.Component {

state = {
    name: "",
    calories: "",
    image: ""
}

handleInput = (event) => {
    let { value, name } = event.target; 



    this.setState( { [name]: value }  )
  }


  handleSubmit = (event) => {
   
    event.preventDefault();


    const newFood = this.state;
    this.props.addFood(newFood);

    
    this.setState({name: '', calories: '', image: ''})
  }


    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
              <h2>Add Food</h2>
              <br />
              
              <label>Name</label>
              <input 
                type="text" 
                name="name"
                value={this.state.name} 
                onChange={this.handleInput} 
              />
              
              <br />
              
              <label>Calories</label>
              <input 
                type="text" 
                name="calories" 
                value={this.state.calories} 
                onChange={this.handleInput}/>
              <br />
              
              <label>Image</label>
              <input 
                type="text" 
                name="image" 
                value={this.state.image} 
                onChange={this.handleInput}
                />
           
           
              <button type="submit">Add food</button>
            </form>
    
            <br />
            
          </div>
        )
    }

}

export default Addfood;