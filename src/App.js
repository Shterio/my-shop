import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignIn from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfilDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			createUserProfilDocument(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SignIn} />
				</Switch>
			</div>
		);
	}
}

export default App;
