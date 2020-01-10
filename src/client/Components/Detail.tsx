import * as React from "react";
import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { IChirp } from "./Chirps";

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
            fetch(`/api/chirps/${this.props.match.params.id}/`)
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

    // TODO: why does it take pressing two times for the
    // state to actually change
    updateText = ( text : string ) => {
       this.setState({
           chirp : {
               id : this.state.chirp.id ,
               user : this.state.chirp.user ,
               text : text
           }
       });
       const chirp_body = {
           user : this.state.chirp.user , text : this.state.chirp.text
        };
       fetch(`/api/chirps/${this.props.match.params.id}`, {
           method : "PUT" ,
           headers : {
               "Content-Type" : "application/json"
           },
           body : JSON.stringify(chirp_body)
       }).then( res => res.json())
           .then( (data) => {
               console.log(`Success : ${data}`);
           }).catch(err => console.log(err));
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
    handleMessageChange = ( event : React.MouseEvent<HTMLButtonElement> ) => {
        const text = (document.querySelector("#input-form") as HTMLInputElement).value;
        this.updateText(text);

         }
 }

interface IDetailProps extends RouteComponentProps<{ id : string }> {}
interface IDetailState {
    chirp : IChirp;
}