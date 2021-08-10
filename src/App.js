import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots: users}));
        
    }

    onSearchChange =(event) =>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        if(this.state.robots.length === 0){
            return <h1>Loading...</h1>
        }else{
            return(
                <div className= 'tc'>
                    <h1 className='f1'>Robofriens</h1>
                    <SearchBox searchChanges ={this.onSearchChange} />
                    <Scroll>
                    <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
