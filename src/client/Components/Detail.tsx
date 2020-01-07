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
        }
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

    //TODO: need a way to push a button and have it changed, not just start typing it out and
    // have it change as the user types
    updateText = ( event : React.ChangeEvent<HTMLInputElement> ) => {
       const text = event.target.value;
       this.setState({
           chirp : {
               ...this.state.chirp,
               text
           }
       });
        console.log(this.state.chirp);
    }; // --> onChange={this.updateText}

    /* render method iim trying to get to work */
    render() {
        return(
            <section className="container-fluid">
                <div className="form-group">
                    <h4>User : { this.state.chirp.user }</h4>
                    <p>{ this.state.chirp.text }</p>
                    <label htmlFor="id">Change Message</label>
                    <input type="text" className="form-control" defaultValue={this.state.chirp.text}
                    onChange={this.updateText}/>
                </div>
            </section>
        )
    }
    /* test render method to see console.log's */
    // render() {
    //     console.log("Detail render called");
    //     return(
    //         <div className="container">
    //             <h1>This is working</h1>
    //         </div>
    //     )
    // }
 }

interface IDetailProps extends RouteComponentProps<{id : string }> {}
interface IDetailState {
    chirp : IChirp;
}