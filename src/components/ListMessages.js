import React, {Component} from 'react';
import Message from "./Message";

class ListMessages extends Component {
    render() {

        //permet de transformer un tableau de données en composant React
        const messages =  this.props.messages.map(message => <Message/>)

        return (
            <div>

            </div>
        );
    }
}

export default ListMessages;
