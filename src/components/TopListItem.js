import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { ListItemText } from "@material-ui/core";

// TODO: having to check itemNote._text !== "undefined" is ugly
const TopListItem = ({ _text }) => (
    <ListItem divider dense button component={Link} to={"/list/" + _text}>
        <ListItemText primary={_text} />
    </ListItem>
);

export default TopListItem;
