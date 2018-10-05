import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import { ListItemText } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

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
            <ListItem divider onClick={this.handleClick}>
                <Checkbox
                    checked={this.state.checked}
                    tabIndex={-1}
                    disableRipple
                />
                <ListItemText
                    primary={this.props.itemName._text}
                    secondary={
                        typeof this.props.itemNote._text !== "undefined" &&
                        this.props.itemNote._text !== ""
                            ? this.props.itemNote._text
                            : null
                    }
                />
            </ListItem>
        );
    }
}
