import React from "react";

function ListItem(props) {
  const uniqueId = "list-item-" + props.id.toFixed(0);

  return (
    <li className="ListItem" id={uniqueId}>
      {props.item}
      <button onClick={props.deleteHandler}>x</button>
    </li>
  );
}

export default ListItem;
