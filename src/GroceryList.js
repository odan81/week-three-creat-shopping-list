import { Component } from "react";
import check from './check.png';

export class GroceryList extends Component{
    constructor(){
        super();
        this.state = {
            userInput: "",
            groceryList: []

        }

    }
    onChangeEvent(e){
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === ''){
            alert('Please enter an item')
        }
        else {
        let listArrey = this.state.groceryList;
        listArrey.push(input);
        this.setState({groceryList: listArrey, userInput: ''})
        }
    }
    crossedWord(event){
        const li = event.target;
        li.classList.toggle("crossed");
    }

    deleteItem(){
        let listArrey = this.state.groceryList; // get access to the arrey(list of groceries), eventListener?
        listArrey.length = 0;
        this.setState({groceryList: listArrey})
    }

    onFormSubmit(e){
        e.preventDefault()
    }

        render() {
            return(
                <div>
                    <form onSubmit={this.onFormSubmit}>
                <div className="container">
                   <input type ='text' placeholder="What do you want to buy?"
                   onChange={(e) =>{this.onChangeEvent(e.target.value)}}
                   value={this.state.userInput}/>
                </div>
                <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className='add'>Add </button>
                </div>

                <ul>
                {this.state.groceryList.map((item, index) =>(
                    <li onClick={this.crossedWord} key={index}> <img src ={check} width='40px' alt= 'shop'/> {item}</li>
                ))
                }
                </ul>
                <div className="container">
                <button onClick={() => this.deleteItem()} className='delete'>Delete</button>
                </div>
                </form>
                </div>
            )
        }

}