import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios'
import LoginForm from '../components/LoginForm'
import DashBoard from '../components/DashBoard'
import OrderBook from '../components/OrderBook'
import Test from '../components/Test'
import DashboardRouter from '../components/DashboardRouter'

class AppRouter extends React.Component {
	constructor(props){
		super(props)
		this.submitLoginData = this.submitLoginData.bind(this);
		this.handleUserLogout = this.handleUserLogout.bind(this);
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

		axios.post('/api/login', data).then(res => {
			console.log(res.data)
			if(!res.data.error) {
				this.intialiseUserData(res.data)
			}
			else alert('Invalid Credentials');
		})
	}

	intialiseUserData(userData) {
		console.log(userData.clientID)
		localStorage.setItem('isLogged','Y')
		this.setState({
			isLogged: true
		})
	}

	handleUserLogout(){
		localStorage.setItem('isLogged','N')
		this.setState({
			isLogged: false
		})
	}

	render() {
	return (
	<BrowserRouter>
		<div>
			{localStorage.getItem('isLogged') === 'Y' ? 
				<DashboardRouter logout={this.handleUserLogout}/> : 
				<LoginForm submitLoginData={this.submitLoginData}/>
			}
		</div>
	</BrowserRouter>
)} 
}

export default AppRouter