import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios'
import LoginForm from '../components/LoginForm'
import Dashboard from '../components/Dashboard'

class AppRouter extends React.Component {
	constructor(props){
		super(props)
		this.submitLoginData = this.submitLoginData.bind(this);
		this.state = {
			name: undefined,
			email: undefined,
			clientID: undefined,
			cookies: undefined,
			isLogged: false
		}
	}

	submitLoginData(email, dob, password) {
		const data = {email, dob, password}

		axios.post('/login', data).then(res => {
			console.log(res.data)
			if(!res.data.error) this.intialiseUserData(res.data)
			else alert('Invalid Credentials');
		})
	}

	intialiseUserData(userData) {
		console.log(userData.clientID)
		this.setState(() => {
			return {
				name: userData.name,
				email: userData.email,
				clientID: userData.clientID,
				cookies: userData.cookies,
				isLogged: true
			}
		})
	}

	render() {
	return (
	<BrowserRouter>
		<div>
			{this.state.isLogged ? <Dashboard data={this.state}/> : <LoginForm submitLoginData={this.submitLoginData}/>}
		</div>
	</BrowserRouter>
)} 
}

export default AppRouter