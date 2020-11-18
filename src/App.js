import React,{Component} from 'react';
import  CardList from './CardList';
import {robots} from './robots';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll';
class  App extends Component{
    constructor(){
      super();
      this.state={
        robots: robots,
        searchfield: ''
      }
    }
    onsearchchange = (event) => {
      this.setState({searchfield: event.target.value})
      
      }
      
    render(){
    const filteredrobots= this.state.robots.filter(robot =>{
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
      })
    
    return(
      <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <Searchbox searchchange={this.onsearchchange}/>
      <Scroll>
      <CardList robots={filteredrobots}/>
      </Scroll>
      </div>
    );
  }
}
export default App