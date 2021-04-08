// import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component{
  constructor() {
    super();
    this.state={
      monsters: [ //mosters is an array
        // {
        //   name:'frankenstain',
        //   id:'crs1'
        // },
        // {
        //   name:'bethal',
        //   id:'crs2'
        // },
        // {
        //   name:'dracula',
        //   id:'crs3'
        // } manual data entry
      ],
      searchField: ''
     };
  }

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters:users}));
 } //getting data from server or db 

 // handleChanges is a class method

handleChange = e => {
  this.setState({ searchField: e.target.value})
};

 //cardlist component is responsible for monster cards
 render()
  {
    const { monsters , searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

   return (
     <div className="App">
       
        <h1>Monster Cards</h1>
       <SearchBox
         placeholder='search monsters'
         handleChange={ this.handleChange }
       />   
       <CardList monsters={filteredMonsters} />  
       
         
        
      </div>
    );
  }
}

export default App;
