import image from './man.webp'
import pic from './shoppings.webp'
import './App.css';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className ="app">
      <div className="container">
      <img src={pic} alt='man' width='200px' />
      </div>
      <div className="container">
      <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className="container">
      <img src={image} alt='shopping' width ='200px'/>
      </div>
    </div>
  );
}

export default App;
