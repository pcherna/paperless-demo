import React from 'react';

// TODO: having to check itemNote._text !== "undefined" is ugly
const ChecklistItem = ({itemName, itemCompleted, itemNote, dateCompleted}) => (
    <div>
        <input id="ZZZ" type="checkbox" defaultChecked={itemCompleted._text!=="NO"}/>
        {itemName._text}
        {((typeof itemNote._text !== "undefined") && (itemNote._text !== '')) ? <em>({itemNote._text})</em> : null}
    </div>
)

export default ChecklistItem;
