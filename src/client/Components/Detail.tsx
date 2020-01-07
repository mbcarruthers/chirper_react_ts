import * as React from "react";
import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { IChirp } from "./Chirps";

//TODO: trying to get detailed chirps to show but they are not showing up in time
// for the render method to be called and it thinks that chirps are null. Fuck you too.
export default class Detail extends Component<IDetailProps, IDetailState> {
    constructor( props : IDetailProps ) {
        super(props);
        console.log(this.props.match.url);
        this.state = {
            chirp : {
                id : null ,
                user : null ,
                text : null
            }
        };
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.updateText = this.updateText.bind(this);
    }
      componentDidMount() {
            fetch(`/api/chirps/${this.props.match.params.id}`)
                .then( (res) => {
                    return res.json();
                })
                .then( (obj) => {
                    const chirp = {
                        id : this.props.match.params.id,
                        user : obj.user ,
                        text: obj.text
                    };
                    this.setState({
                        chirp : chirp
                    });
                    console.log(this.state.chirp);
                })
                .catch( err => console.log(err) );
    }


    updateText = (text : string ) => {
       this.setState({
           chirp : {
               id : this.state.chirp.id ,
               user : this.state.chirp.user ,
               text : text
           }
       });
    };


    render() {
        return(
            <section className="container-fluid border m-2">
                <div className="form-group">
                    <h4>User : { this.state.chirp.user }</h4>
                    <p>{ this.state.chirp.text }</p>
                    <label htmlFor="id">Change Message</label>
                    <input type="text" className="form-control" defaultValue={this.state.chirp.text} id="input-form" />
                    <button className="btn btn-outline-primary mt-2" onClick={this.handleMessageChange}>Change Message</button>
                </div>
            </section>
        )
    }
    handleMessageChange = () => {
        const text = document.getElementById("input-form").value; // IDE gives me an error but it works
        this.updateText(text);
        console.log(this.state.chirp);

    }
 }

interface IDetailProps extends RouteComponentProps<{id : string }> {}
interface IDetailState {
    chirp : IChirp;
}