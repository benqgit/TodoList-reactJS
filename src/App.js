import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    //update the old items without losing previous data!
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      id: uuid(),
      item: "",
      editItem: false
    });
  };

  handleClearingData = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filtredItems = this.state.items.filter(item => {
      return item.id !== id;
    });

    this.setState({ items: filtredItems });
  };
  handleEdit = id => {
    const filtredItems = this.state.items.filter(item => {
      return item.id !== id;
    });
    const selectedItem = this.state.items.find(item => {
      return item.id === id;
    });
    const { title } = selectedItem;

    this.setState({ items: filtredItems, item: title, editItem: true, id: id });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center"> Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearData={this.handleClearingData}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
