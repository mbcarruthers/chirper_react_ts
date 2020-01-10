import * as React from "react";
import { Component } from "react";

export default class AddChirp extends Component<IAddChirpProps , IAddChirpState> {
    constructor( props : IAddChirpProps ) {
        super(props);
        this.state = {
            user : null ,
            text : null
        }
        this.submitChirp = this.submitChirp.bind(this);
    }
    async submitChirp( event : React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(this.state);
        await fetch("/api/chirps", {
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(this.state)
        })
            .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="container text-center border shadow-sm m-2">
                <form onSubmit={this.submitChirp} className="form-group">
                        <input type="text"
                               className="form-control"
                               id="username"
                               placeholder="username"
                               onChange={ ( event : React.ChangeEvent<HTMLInputElement>) => this.setState({user : event.target.value})}
                        />
                        <input type="text"
                               className="form-control"
                               placeholder="message"
                               onChange={(event : React.ChangeEvent<HTMLInputElement>) => this.setState({text : event.target.value})}
                        />
                        <button className="btn btn-outline-primary">Post Chirp</button>
                </form>

            </div>
        )
    }
}





interface IAddChirpProps {}

interface IAddChirpState {
    user : string;
    text : string;
}