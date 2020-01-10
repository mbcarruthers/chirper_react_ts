import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";

export default class Chirps extends Component<IChirpProps , IChirpState> {
    constructor( props : IChirpProps ) {
        super(props);
        this.state = {
            chirps : new Array<IChirp>()
        }
    }

    async componentDidMount() {
        await fetch("/api/chirps") // does the await need to be there?
            .then( (res) => {
                return res.json();
            }).then( (obj) => {
            const chirps = Object.keys(obj).map( (index) => {
                return {
                    id : index,
                    user : obj[index].user,
                    text : obj[index].text
                }
            });
            chirps.pop(); // pop to get rid of nextId , prob a better solution though
            this.setState({
                chirps : chirps
            });
            this.props.history.replace("/");
        }).catch( err => console.log(err));
    }
    render() {
        const chirp_cards = this.state.chirps.map( (item,index) => {
            return(
                <div className="card border shadow-sm m-2" key={index}>
                    <li className="list-group-item" >
                        <h4 className="card-title">{item.user}</h4>
                        <p className="card-body">{item.text}</p>
                        <Link to={`/${item.id}`}>Admin</Link>
                    </li>
                </div>
            )
        });
        return(
            <div className="container text-center">
                <ul className="list-unstyled">
                    { chirp_cards }
                </ul>
            </div>
        )
    }
}


export interface IChirp {
    id : string;
    user : string;
    text : string; //TODO:change all text's to message
}
interface IChirpProps extends RouteComponentProps {}

interface IChirpState {
    chirps : Array<IChirp>
}

