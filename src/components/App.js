import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';
import '../stylesheets/App.css';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropboxAccessToken: '<No token yet>',
        }
    }
    // Callback to let child components update my state
    updateDropboxAccessToken = (value) => this.setState({dropboxAccessToken: value});

    render() {
        return(
            <div>
                <Header />
                <Main dropboxAccessToken={this.state.dropboxAccessToken} updateDropboxAccessToken={this.updateDropboxAccessToken} />
            </div>
        )
    }
}
