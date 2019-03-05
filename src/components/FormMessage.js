import React, {Component} from 'react';

class FormMessage extends Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="Username"/>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <input type="submit"/>
            </form>
        );
    }
}

export default FormMessage;