import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cardlist from '../conponents/Cardlist';
import SearchBox from '../conponents/SearchBox';
import Scroll from '../conponents/Scroll';
import './App.css';

import {setSearchFiled, requestRobots} from '../actions'


const mapStateToProps = state => {
    return {
        searchfiled : state.searchRobots.searchfiled,
        robots : state.requestRobots.robots,
        isPending : state.requestRobots.isPending,
        error : state.requestRobots.error
    }
       
    
}

const mapDispatchToProps = (dispatch) => {
    return({
        OnSearchChange : (event) => dispatch(setSearchFiled(event.target.value)),
        OnRequestRobots : () => dispatch(requestRobots())
        
    })
}
class App extends Component{
   constructor(){
       super();
       this.state =({
            date : new Date()
       })
   }

   componentDidMount(){
    this.props.OnRequestRobots()
   }

   tick(){
       this.setState({date:new Date()})
   }

    render(){
        const {date} = this.state;
        const {robots,searchfiled,OnSearchChange,isPending} = this.props;
        const filterSearch = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchfiled.toLowerCase());
        })
        /*robots.lenght === 0 <=> (robots.length will recieve 0 like a default value
            & javascript evaluate it to false so we need to add '!')*/
 return isPending ?
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