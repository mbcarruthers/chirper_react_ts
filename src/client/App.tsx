import * as React from 'react';
import { Component } from "react";

// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}
//
// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}
//
// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }
//
// export interface IAppProps {}
//
// export interface IAppState {
// 	name: string;
// }

export default class App extends Component<IAppProps, IAppState> {
	render() {
		return(
			<div className="container text-center">
				<h1>This is working correctly</h1>
			</div>
		)
	}
}

interface IAppProps {}
interface IAppState {}

