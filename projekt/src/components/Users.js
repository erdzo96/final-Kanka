import React, { Component } from 'react';

class Users extends Component {

   componentWillMount (){
       this.setState({users:[]});
   }

   componentDidMount(){
       this.loadPeople();
   }    
   loadPeople () {        
   fetch('https://jsonplaceholder.typicode.com/users')            
   .then(response => response.json())            
   .then(people => {                
     this.setState({ users: people});            
    });    
    }    
	render() {        
       return (<ul className="uzivatelia">{this.state.users.map(user => {
           return(<li id={user.id}>{user.name}</li>);
       })}</ul>        
	);    
	}};
export default Users;