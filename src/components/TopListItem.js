import React from 'react';
import { Link } from 'react-router-dom';

// TODO: having to check itemNote._text !== "undefined" is ugly
const TopListItem = ({_text}) => (
    <li>
        <Link to={'/list/' + _text}>{_text}</Link>
    </li>
)

export default TopListItem;
