import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cardlist from '../conponents/Cardlist';
import SearchBox from '../conponents/SearchBox';
import Scroll from '../conponents/Scroll';
import './App.css';

import {setSearchFiled} from '../actions'


const mapStateToProps = state => {
    console.log(new Date(),'mapStatetoprops')
    return {
        searchfiled : state.searchfiled
    }
       
    
}

const mapDispatchToProps = (dispatch) => {
    console.log(new Date(),'mapDispatchToProps')
    return({
        OnSearchChange : (event) => dispatch(setSearchFiled(event.target.value))
        
    })
}
class App extends Component{
   constructor(){
       super();
       this.state =({
            robots:[],
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

    render(){
        const {robots,date} = this.state;
        const {searchfiled,OnSearchChange} = this.props;
        const filterSearch = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchfiled.toLowerCase());
        })
        /*robots.lenght === 0 <=> (robots.length will recieve 0 like a default value
            & javascript evaluate it to false so we need to add '!')*/
 return !robots.length ?
          <h1 className="tc f1">{date.toLocaleTimeString()}</h1> :
       (
            <div className="tc">
            <h1 className="f2">RobotFriends</h1>
            <SearchBox searchChange={OnSearchChange}/>
            <Scroll>
            <Cardlist robots={filterSearch}/>
            </Scroll>
            </div>
        );
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(App);