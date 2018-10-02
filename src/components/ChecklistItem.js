import React, { Component } from "react";

export class ChecklistItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    componentDidMount() {
        // TODO: Move to componentWillMount?
        this.setState({ checked: this.props.itemCompleted._text !== "NO" });
    }

    handleClick = () => {
        console.log(
            "Setting checkbox '%s' to %o",
            this.props.itemName._text,
            !this.state.checked
        );
        this.setState({ checked: !this.state.checked });
    };

    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleClick}
                />
                {this.props.itemName._text}
                {typeof this.props.itemNote._text !== "undefined" &&
                this.props.itemNote._text !== "" ? (
                    <span>
                        <br />
                        <em>({this.props.itemNote._text})</em>
                    </span>
                ) : null}
            </div>
        );
    }
}
