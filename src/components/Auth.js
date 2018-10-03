import React, { Component } from "react";
import queryString from "query-string";

// Dropbox OAuth redirects to this component
// TODO: Check for failure
export class Auth extends Component {
    componentDidMount() {
        // Pathname is "/access_token=...&token_type=...&..."
        // Make it parseable by starting with ? instead of /
        const values = queryString.parse(
            "?" + this.props.location.pathname.substr(1)
        );
        console.log(values.access_token);
        // console.log(values.token_type);
        // console.log(values.account_id);
        // console.log(values.uid);
        this.props.updateDropboxAccessToken(values.access_token);
        window.location = "http://localhost:3000/#/settings";
    }

    render() {
        return (
            <div>
                <div>
                    authArgs:
                    {this.props.match.params.authArgs}
                </div>
                <div>pathname: {this.props.location.pathname}</div>
            </div>
        );
    }
}
