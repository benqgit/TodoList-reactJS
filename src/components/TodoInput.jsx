import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    const inputIcon = editItem ? "fas fa-pen" : "fas fa-book";
    const buttonLabel = editItem ? "edit item" : "add item";
    let buttonColorClass = "btn btn-block  mt-3 text-capitalize btn-";
    buttonColorClass += editItem ? "success" : "primary";
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className={inputIcon}></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo list"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={buttonColorClass}>
            {buttonLabel}
          </button>
        </form>
      </div>
    );
  }
}
