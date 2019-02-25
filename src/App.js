import React, { Component } from "react";

import ListItem from "./ListItem/ListItem";
import NewItem from "./NewItem/NewItem";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Todo 1" },
      { id: 2, name: "Todo 2" }, // 1
      { id: 3, name: "Todo 3" }
    ],
    newItem: ""
  };

  changeNewItem = event =>
    this.setState({
      newItem: event.target.value
    });

  addNewItem = () => {
    const newItems = [...this.state.items];
    newItems.push({
      id: Math.random() * 1000,
      name: this.state.newItem
    });

    this.setState({
      items: newItems,
      newItem: ""
    });
  };

  deleteListItem = id => {
    const newItems = [...this.state.items];
    const index = newItems.findIndex(item => item.id === id);
    newItems.splice(index, 1);

    this.setState({
      items: newItems,
      newItem: ""
    });
  };

  render() {
    const listItems = this.state.items.map(item => (
      <ListItem
        id={item.id}
        key={item.id}
        item={item.name}
        deleteHandler={() => this.deleteListItem(item.id)}
      />
    ));

    return (
      <div className="App">
        <ul>
          {listItems}
          <NewItem
            changeNewItem={this.changeNewItem}
            addNewItem={this.addNewItem}
            value={this.state.newItem}
          />
        </ul>
      </div>
    );
  }
}

export default App;
