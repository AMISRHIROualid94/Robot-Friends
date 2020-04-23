import React, { Component } from 'react';
import Cardlist from '../conponents/Cardlist';
import SearchBox from '../conponents/SearchBox';
import Scroll from '../conponents/Scroll';
import './App.css';


class App extends Component{
   constructor(){
       super();
       this.state =({
            robots:[],
            searchFiled:'',
            date : new Date()
       })
   }

   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json()})
    .then(users => {
        this.setState({robots:users})
    })   
    setInterval(() => this.tick(), 1000);
   }

   tick(){
       this.setState({date:new Date()})
   }


   OnSearchChange = (event)=>{
      this.setState({searchFiled:event.target.value});
   }




    render(){
        const {robots,searchFiled,date} = this.state;
        const filterSearch = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchFiled.toLowerCase());
        })
        /*robots.lenght === 0 <=> (robots.length will recieve 0 like a default value
            & javascript evaluate it to false so we need to add '!')*/
 return !robots.length ?
          <h1 className="tc f1">{date.toLocaleTimeString()}</h1> :
       (
            <div className="tc">
            <h1 className="f2">RobotFriends</h1>
            <SearchBox searchChange={this.OnSearchChange}/>
            <Scroll>
            <Cardlist robots={filterSearch}/>
            </Scroll>
            </div>
        );
    }
    
}

export default App;