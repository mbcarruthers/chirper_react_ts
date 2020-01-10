import * as React from 'react';
import { Component } from "react";
import Chirps from "./Components/Chirps";
import { Route , Switch , BrowserRouter } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Detail from "./Components/Detail";
import AddChirp from "./Components/AddChirp";
//TODO: will eventually need to move away from having the app have state
// and break this down into seperate parts

export default class App extends Component<IAppProps, IAppState> {
	constructor( props : IAppProps ) {
		super(props);
		console.log("Useless constructor for App");
	}
	componentDidMount() {
		console.log("App component has mounted");
	}
	render() {
		return(
			<>
				<NavigationBar/>
				<AddChirp />
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Chirps} />
						<Route path="/:id" component={Detail} />
					</Switch>
				</BrowserRouter>
			</>
		)
	}
}

interface IAppProps {}
interface IAppState {}

