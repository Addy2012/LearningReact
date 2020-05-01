import React, {Component} from 'react';
import './App.css';
import CardList from "./components/card-list/card-list";
import Searchbox from './components/searchbox/searchbox';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:""
    }
  }

  componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}))
  }
  handleChange=(e)=>{
    this.setState({
      searchField:e.target.value
    })
  }

  render(){
    const { monsters , searchField } = this.state;
    const filteredMonster=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      (
        <div className="App">
          <h1>Monster's house</h1>
          <Searchbox type="search" placeholder="Search monster" handleChange={this.handleChange} />
          <CardList monsters={filteredMonster}/>
        </div>
      )
    )
  }
}

export default App;
